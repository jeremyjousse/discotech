import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Track, TrackSchema } from './schemas/Track.schema';
import { MongoTrackRepositoryService } from './MongoTrackRepository.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoMemoryServer } from 'mongodb-memory-server';

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
    MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }]),
  ],
  providers: [MongoTrackRepositoryService],
  exports: [MongoTrackRepositoryService],
})
export class DatabaseModule {}
