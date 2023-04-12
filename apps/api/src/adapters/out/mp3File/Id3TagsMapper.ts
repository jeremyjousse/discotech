import { Tags } from 'node-id3';
import { Id3Genre } from 'src/domain/models/Id3Genres';
import { Id3Tags } from 'src/domain/models/Id3Tags';
import { Id3TagComment, Id3TagRating } from './models';

/**
 * ID3 Tags Mapper from standard
 * to internal domain
 */
export default class Id3TagsMapper {
  static POPULARIMETER_EMAIL = process.env.POPULARIMETER_EMAIL;

  public static nodeId3ToDomain(tags: Tags): Id3Tags {
    const id3Tags: Id3Tags = {
      artist: tags.artist || null,
      album: tags.album || null,
      comments:
        Id3TagsMapper.nodeId3CommentToDomainComment(tags.comment) || null,
      dateReleased:
        Id3TagsMapper.nodeId3StringDateToDate(tags.releaseTime) || null,
      genre: (tags.genre as Id3Genre) || null,
      picture: Id3TagsMapper.nodeId3ImageToDomainPicture(tags.image) || null,
      publisher: tags.publisher || null,
      rating: Id3TagsMapper.nodeId3RatingToDomainRating(
        tags.popularimeter?.rating,
      ),
      rekordboxed: tags.comment?.text?.includes('Rekordboxed') ? true : null,
      title: tags.title || null,
      toMix: tags.comment?.text?.includes('toMix') ? true : null,
      trackNumber: Id3TagsMapper.nodeId3TrackNumberToDomainTrackNumber(
        tags.trackNumber,
      ),
      trackCount: Id3TagsMapper.nodeId3TrackNumberToDomainTrackCount(
        tags.trackNumber,
      ),
    };
    return id3Tags;
  }

  public static domainToNodeId3(tags: Id3Tags): Tags {
    const id3Tags: Tags = {
      artist: tags.artist || '',
      album: tags.album || '',
      comment: Id3TagsMapper.domainCommentToNodeId3Comment(tags),
      title: tags.title || '',
      genre: tags.genre || '',
      year: Id3TagsMapper.domainDateReleasedToNodeId3Year(tags.dateReleased),
      publisher: tags.publisher || '',
      trackNumber:
        Id3TagsMapper.domainTrackNumberAndTrackCountToNodeId3TrackNumber(
          tags.trackNumber,
          tags.trackCount,
        ),
      image: Id3TagsMapper.domainPictureToNodeId3Image(tags.picture),
      releaseTime: Id3TagsMapper.domainDateToNodeId3StringDate(
        tags.dateReleased,
      ),
      popularimeter: {
        // TODO parse popularimeter if Rating exists
        email: Id3TagsMapper.POPULARIMETER_EMAIL,
        rating: Id3TagRating[tags.rating],
        counter: 0,
      },
    };
    return id3Tags;
  }

  private static domainPictureToNodeId3Image(picture: string): any {
    if (!picture) {
      return null;
    }
    return Buffer.from(
      picture.replace('data:image/jpeg;base64,', ''),
      'base64',
    );
  }

  private static domainTrackNumberAndTrackCountToNodeId3TrackNumber(
    trackNumber: number,
    trackCount: number,
  ): string {
    if (trackNumber) {
      if (trackCount) {
        return trackNumber.toString() + '/' + trackCount.toString();
      }
      return trackNumber.toString();
    }
    return '';
  }

  private static domainDateToNodeId3StringDate(releaseDate: Date): string {
    if (releaseDate) {
      return releaseDate.toISOString().slice(0, 10);
    }
    return null;
  }

  private static domainDateReleasedToNodeId3Year(releaseDate: Date): string {
    if (releaseDate) {
      return releaseDate.getFullYear().toString();
    }
    return null;
  }

  private static domainCommentToNodeId3Comment(tags: Id3Tags): Id3TagComment {
    let comments = tags.comments || '';
    // TODO refactor
    if (tags.toMix && !comments.includes('toMix')) {
      comments += ' toMix';
    } else if (!tags.toMix && comments.includes('toMix')) {
      comments = comments.replace('toMix', '');
    }
    if (tags.rekordboxed && !comments.includes('Rekordboxed')) {
      comments += ' Rekordboxed';
    } else if (!tags.rekordboxed && comments.includes('Rekordboxed')) {
      comments = comments.replace('Rekordboxed', '');
    }
    return {
      language: 'eng',
      shortText: null,
      text: comments,
    };
  }

  private static nodeId3CommentToDomainComment(
    comment: Tags['comment'],
  ): string {
    if (comment?.text) {
      return comment.text.replaceAll(/toMix|Rekordboxed/g, '').trim();
    }
    return null;
  }

  private static nodeId3TrackNumberToDomainTrackCount(track: string): number {
    if (track) {
      if (track.indexOf('/')) {
        return Number.parseInt(track.split('/')[1]);
      } else {
        return null;
      }
    }
    return null;
  }

  private static nodeId3TrackNumberToDomainTrackNumber(track: string): number {
    if (track) {
      if (track.indexOf('/')) {
        return Number.parseInt(track.split('/')[0]);
      } else {
        return Number.parseInt(track);
      }
    }
    return null;
  }

  private static nodeId3StringDateToDate(stringDate: string): Date {
    // TODO check if OK
    return stringDate ? new Date(stringDate) : null;
  }

  private static nodeId3ImageToDomainPicture(imageTag: Tags['image']): string {
    if (imageTag && typeof imageTag !== 'string' && imageTag.imageBuffer) {
      return (
        'data:image/jpeg;base64,' + imageTag.imageBuffer.toString('base64')
      );
    }
    return null;
  }

  private static nodeId3RatingToDomainRating(id3rating: number): number {
    if (id3rating == null) {
      return null;
    }
    return Number.parseInt(
      Object.keys(Id3TagRating).find(
        (rating) => Id3TagRating[rating] == id3rating,
      ),
    );
  }
}
