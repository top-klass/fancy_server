import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Musician } from '../musician/musician.entity';

@Entity()
export class Bookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  musicianId: number;

  @ManyToOne(type => User, user => user.bookmarks)
  @JoinColumn({name: "userId"})
  user: User;

  @ManyToOne(type => Musician, musician => musician.bookmarks)
  @JoinColumn({name: "musicianId"})
  musician: Musician;
}
