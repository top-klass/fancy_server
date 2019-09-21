import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { BookmarkService } from './bookmark.service';
import { CreateBookmarkDto } from './CreateBookmarkDto';

@ApiUseTags('bookmarks')
@Controller('bookmark')
export class BookmarkController {

  constructor(private service: BookmarkService) { }

  @Get(':id')
  get(@Param('id') userId: number) {
    return this.service.getBookmark(userId);
  }

  @Post(':id')
  create(@Body() createBookmarkDto: CreateBookmarkDto) {
    return this.service.createBookmark(createBookmarkDto);
  }
}
