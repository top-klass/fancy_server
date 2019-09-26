import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { UserPointHistoryService } from './user-point-history.service';
import { CreateHistoryDto } from './dto/create_history.dto';

@ApiUseTags('histories')
@Controller('user-point-history')
export class UserPointHistoryController {

  constructor(private service: UserPointHistoryService) { }

  @Post(':id')
  create(@Body() createHistoryDto: CreateHistoryDto) {
    return this.service.createHistory(createHistoryDto);
  }

  @Get(':id/:status')
  get(@Param('id') userId: number, @Param('status') status: string) {

    if (status === '1') {
      return this.service.getHistory(userId);
    } else {
      return this.service.getAllHistory(userId);
    }
  }
}
