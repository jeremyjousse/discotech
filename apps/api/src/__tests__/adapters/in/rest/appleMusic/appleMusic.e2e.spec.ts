import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../../../../app.module';
import { AppleScriptService } from 'src/adapters/out/appleMusic/AppleScript.service';
import { AppleMusicLibraryXmlReaderService } from 'src/adapters/out/appleMusic/AppleMusicLibraryXmlReader.service';
import { join } from 'path';

describe('AppleMusicController (e2e)', () => {
  let app: INestApplication;
  let appleScriptService: AppleScriptService;
  let appleMusicLibraryXmlReaderService: AppleMusicLibraryXmlReaderService;

  beforeAll(async () => {
    // https://dev.to/webeleon/unit-testing-nestjs-with-mongo-in-memory-54gd
    // https://medium.com/@evgheni.calcutin/testing-nest-js-and-mongodb-apps-23868e4108fc

    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      providers: [AppleScriptService, AppleMusicLibraryXmlReaderService],
    }).compile();

    appleScriptService =
      moduleFixture.get<AppleScriptService>(AppleScriptService);
    appleMusicLibraryXmlReaderService =
      moduleFixture.get<AppleMusicLibraryXmlReaderService>(
        AppleMusicLibraryXmlReaderService,
      );
    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('/library (PUT)', () => {
    it('returns library update json', () => {
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
        .mockImplementation(() =>
          join(__dirname, '../../../../resources/library.xml'),
        );
      const expectedResult = { added: 3, updated: 0, deleted: 0 };
      return request(app.getHttpServer())
        .put('/library')
        .expect(200)
        .expect(expectedResult);
    });
  });
});
