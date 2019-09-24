import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bookmark } from '../bookmark/bookmark.entity';
import { UserPointHistory } from '../user-point-history/user-point-history.entity';
import { Goods } from '../goods/goods.entity';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @OneToMany(type => Bookmark, bookmark => bookmark.musician)
  bookmarks: Bookmark[];

  @OneToMany(type => UserPointHistory, userPointHistory => userPointHistory.musician)
  userPointHistorys: UserPointHistory[];

  @OneToMany(type => Goods, goods => goods.musician)
  goods: Goods[];
}
