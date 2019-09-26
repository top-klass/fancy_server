import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Musician } from '../musician/musician.entity';
import { Goods } from '../goods/goods.entity';

@Entity()
export class UserPointHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  musicianId: number;

  @Column()
  goodsId: number;

  @Column()
  status: boolean;

  @CreateDateColumn({type: 'timestamp'})
  date: Date;

  @Column()
  price: number;

  @Column()
  balance: number;

  @ManyToOne(type => User, user => user.userPointHistories)
  @JoinColumn({name: "userId"})
  user: User;

  @ManyToOne(type => Musician, musician => musician.userPointHistories)
  @JoinColumn({name: "musicianId"})
  musician: Musician;

  @ManyToOne(type => Goods, goods => goods.userPointHistorys)
  @JoinColumn({name: "goodsId"})
  goods: Goods;
}
