import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppleScriptService } from 'src/adapters/out/appleMusic/AppleScript.service';
import { AppleMusicLibraryXmlReaderService } from 'src/adapters/out/appleMusic/AppleMusicLibraryXmlReader.service';
import { join } from 'path';
import { UpdateLibraryUseCase } from 'src/use-cases/update-library/updateLibrary.useCase';
import { AppleMusicLibraryService } from 'src/adapters/out/appleMusic/AppleMusicLibrary.service';
import { MongoTrackRepositoryService } from 'src/adapters/out/mongoDb/MongoTrackRepository.service';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { Connection, Model, connect } from 'mongoose';
import {
  Track,
  TrackSchema,
} from 'src/adapters/out/mongoDb/schemas/Track.schema';
import { getModelToken } from '@nestjs/mongoose';

describe('UpdateLibraryUseCase', () => {
  let app: INestApplication;
  let updateLibraryUseCase: UpdateLibraryUseCase;
  let appleScriptService: AppleScriptService;
  let appleMusicLibraryXmlReaderService: AppleMusicLibraryXmlReaderService;
  let libraryService: AppleMusicLibraryService;
  let trackRepository: MongoTrackRepositoryService;
  let mongod: MongoMemoryServer;
  let mongoConnection: Connection;
  let trackModel: Model<Track>;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    mongoConnection = (await connect(uri)).connection;
    trackModel = mongoConnection.model(Track.name, TrackSchema);

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        AppleMusicLibraryService,
        AppleMusicLibraryXmlReaderService,
        AppleScriptService,
        { provide: getModelToken(Track.name), useValue: trackModel },
      ],
    }).compile();

    appleScriptService =
      moduleFixture.get<AppleScriptService>(AppleScriptService);
    appleMusicLibraryXmlReaderService =
      moduleFixture.get<AppleMusicLibraryXmlReaderService>(
        AppleMusicLibraryXmlReaderService,
      );

    trackRepository = new MongoTrackRepositoryService(trackModel);

    libraryService = new AppleMusicLibraryService(
      appleScriptService,
      appleMusicLibraryXmlReaderService,
    );

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  beforeEach(() => {
    updateLibraryUseCase = new UpdateLibraryUseCase(
      libraryService,
      trackRepository,
    );
  });

  afterAll(async () => {
    await app.close();
  });

  describe('execute', () => {
    it('should add tracks to db', async () => {
      jest
        .spyOn(appleScriptService, 'updateMusicLibraryXmlFile')
        .mockImplementation(
          () =>
            new Promise((resolve) => {
              resolve();
            }),
        );
      jest
        .spyOn(appleMusicLibraryXmlReaderService as any, 'xmlLibraryPath')
        .mockImplementationOnce(() =>
          join(__dirname, '../../../__tests__/resources/library.xml'),
        )
        .mockImplementationOnce(() =>
          join(__dirname, '../../../__tests__/resources/libraryUpdated.xml'),
        );

      const updateFirstExecutionResult = await updateLibraryUseCase.execute();
      expect(updateFirstExecutionResult).toEqual({
        added: 3,
        updated: 0,
        deleted: 0,
      });

      const updateSecondExecutionResult = await updateLibraryUseCase.execute();
      expect(updateSecondExecutionResult).toEqual({
        added: 1,
        updated: 1,
        deleted: 0,
      });
    });
  });
});
