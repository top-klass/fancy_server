import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entity';
import { Musician } from '../musician/musician.entity';

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.bookmarks)
  user: User;

  @ManyToOne(type => Musician, musician => musician.bookmarks)
  musician: Musician;
}
