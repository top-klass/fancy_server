import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [TypeOrmModule.forRoot(), BookmarkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
