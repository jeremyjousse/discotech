import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Id3Genre } from 'src/domain/models/Id3Genres';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  album: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  bitRate: number;

  @Prop({ required: true })
  genre: Id3Genre;

  @Prop({ required: true })
  duration: number;

  @Prop({ required: true })
  dateAdded: Date;

  @Prop({ required: true })
  dateUpdated: Date; // ??

  @Prop()
  dateReleased: Date;

  @Prop({ required: true })
  hasPicture: boolean;

  @Prop({ required: true })
  location: string; // path ??

  @Prop({ required: true })
  persistentId: string;

  @Prop()
  rating: number;

  @Prop({ required: true })
  sampleRate: number;

  @Prop({ required: true })
  size: number;

  @Prop()
  trackCount: number;

  @Prop()
  trackNumber: number;

  @Prop({ required: true })
  title: string;
}

export const TrackSchema = SchemaFactory.createForClass(Track);
