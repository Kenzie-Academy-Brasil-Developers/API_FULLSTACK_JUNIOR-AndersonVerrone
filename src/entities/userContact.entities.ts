import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity("user_contacts")
export class UserContact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 15 })
    phoneNumber: string;

    @ManyToOne(() => User, (user) => user.additionalContacts)
    user: User;
}