import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookmark } from './bookmark.entity';
import { CreateBookmarkDto} from './dto/create_bookmark.dto';

@Injectable()
export class BookmarkService {

  constructor(@InjectRepository(Bookmark) private bookmarkRepository: Repository<Bookmark>) {}

  async getBookmark(userId: number): Promise<Bookmark[]> {
    return await this.bookmarkRepository.find({
      select: ["musicianId"],
      where: [{"userId": userId}]
    });
  }

  async createBookmark(createBookmarkDto: CreateBookmarkDto) {
    return await this.bookmarkRepository.save(createBookmarkDto);
  }
}
