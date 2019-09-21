import { Controller, Get, Param } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { BookmarkService} from './bookmark.service';
import { Bookmark} from './bookmark.entity';

@ApiUseTags('bookmarks')
@Controller('bookmark')
export class BookmarkController {

  constructor(private service: BookmarkService) { }

  @Get(':id')
  get(@Param() params) {
    return this.service.getBookmark(params.id);
  }
}
