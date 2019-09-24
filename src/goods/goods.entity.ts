import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { UserPointHistory } from '../user-point-history/user-point-history.entity';
import { Musician } from '../musician/musician.entity';

@Entity()
export class Goods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  musicianId: number;

  @Column()
  price: number;

  @Column({ length: 20 })
  name: string;

  @Column()
  category: string;

  @Column()
  stock: number;

  @ManyToOne(type => Musician, musician => musician.goods)
  @JoinColumn({name: "musicianId"})
  musician: Musician;

  @OneToMany(type => UserPointHistory, userPointHistory => userPointHistory.goods)
  userPointHistorys: UserPointHistory[];

}
