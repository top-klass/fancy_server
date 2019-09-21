import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookmark } from './bookmark.entity';
import { Musician } from '../musician/musician.entity';

@Injectable()
export class BookmarkService {

  constructor(@InjectRepository(Bookmark) private bookmarkRepository: Repository<Bookmark>) {}

  async getBookmark(userId: number): Promise<Bookmark[]> {
    return await this.bookmarkRepository.find({
      where: [{"id": userId}]
    });
  }
}
