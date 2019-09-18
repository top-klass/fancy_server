import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bookmark } from '../bookmark/bookmark.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ length: 10 })
  nickname: string;

  @Column()
  authenticated: boolean;

  @Column()
  address: string;

  @OneToMany(type => Bookmark, bookmark => bookmark.user)
  bookmarks: Bookmark[];
}
