import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserPointHistory } from './user-point-history.entity';
import { CreateHistoryDto } from './dto/create_history.dto';

@Injectable()
export class UserPointHistoryService {

  constructor(@InjectRepository(UserPointHistory) private historyRepository: Repository<UserPointHistory>) {}

  async createHistory(createHistoryDto: CreateHistoryDto) {
    return await this.historyRepository.save(createHistoryDto);
  }

  async getAllHistory(userId: number) {
    return await this.historyRepository.find({
      where: [{"userId": userId}]
    });
  }

  async getHistory(userId: number) {
    return await this.historyRepository.find({
      where: [{"userId": userId, "status": true}]
    });
  }
}
