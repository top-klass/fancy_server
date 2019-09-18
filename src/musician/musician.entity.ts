import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Bookmark } from '../bookmark/bookmark.entity';

@Entity()
export class Musician {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  name: string;

  @OneToMany(type => Bookmark, bookmark => bookmark.musician)
  bookmarks: Bookmark[];
}
