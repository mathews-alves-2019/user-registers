import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
import Users from './User';

@Entity('adress')
export default class Adress {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    cep: string;

    @Column()
    street: string;

    @Column()
    usersId: string;

    @Column()
    houseNumber: string;

    @Column()
    country: string;

    @Column()
    state: string;

    @ManyToOne(() => Users, (user) => user.adress)
    @JoinColumn()
    users: Users;
}
