import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { Bookmark } from './bookmark.entity';
import { Musician } from '../musician/musician.entity';
import { CreateBookmarkDto } from './dto/create_bookmark.dto';

@Injectable()
export class BookmarkService {

  constructor(@InjectRepository(Bookmark) private bookmarkRepository: Repository<Bookmark>) {}

  async getBookmark(userId: number): Promise<Musician[]> {
    return await getRepository(Musician).createQueryBuilder("musician")
      .where(qb => {
        const subQuery = qb.subQuery()
          .select("bookmark.musicianId")
          .from(Bookmark, "bookmark")
          .where("bookmark.userId = :userId")
          .getQuery();
        return "musician.id IN " + subQuery;
      })
      .setParameter("userId", userId)
      .getMany();
  }

  async createBookmark(createBookmarkDto: CreateBookmarkDto) {
    return await this.bookmarkRepository.save(createBookmarkDto);
  }
}
