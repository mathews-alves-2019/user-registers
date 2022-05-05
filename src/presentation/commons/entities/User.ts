import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    JoinColumn,
} from 'typeorm';
import Adress from './Adress';

@Entity('users')
export default class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ select: false })
    password: string;

    @OneToMany(() => Adress, (adress) => adress.users, {
        eager: true,
    })
    @JoinColumn({ name: 'id', referencedColumnName: 'usersId' })
    adress: Adress[];
}
