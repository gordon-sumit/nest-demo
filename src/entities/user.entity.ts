
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany, JoinColumn
} from 'typeorm';
import {SchoolUsers} from "./schoolUser.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    address: string;

    @Column({ default: true })
    isActive: boolean;

    @Column({ default: 'athlete' })
    role: string;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    public created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    public updated_at: Date;

    @DeleteDateColumn({ type: "timestamp"})
    public deleted_at: Date;

    @OneToMany(() => SchoolUsers, (schoolUser)=>schoolUser.user_id)
    userSchools: SchoolUsers[];

}