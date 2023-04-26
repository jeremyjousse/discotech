import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseTrack, TrackSchema } from './schemas/Track.schema';
import { MongoTrackRepositoryService } from './MongoTrackRepository.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoMemoryServer } from 'mongodb-memory-server';
import { NestLoggerModule } from '../nestLogger/NestLogger.module';
import { TrackMapper } from './track.mapper';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`,
      isGlobal: true,
    }),
    process.env.NODE_ENV === 'test'
      ? MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async () => {
            const mongod = await MongoMemoryServer.create();
            const uri = mongod.getUri();
            return { uri };
          },
        })
      : MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: async (config: ConfigService) => {
            return {
              uri: config.get<string>('MONGODB_HOST'),
            };
          },
        }),
    MongooseModule.forFeature([
      { name: MongooseTrack.name, schema: TrackSchema },
    ]),
    NestLoggerModule,
  ],
  providers: [MongoTrackRepositoryService],
  exports: [MongoTrackRepositoryService],
})
export class DatabaseModule {}
