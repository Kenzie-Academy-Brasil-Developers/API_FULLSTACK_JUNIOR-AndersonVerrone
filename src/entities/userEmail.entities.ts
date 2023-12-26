import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from ".";

@Entity("user_emails")
export class UserEmail {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ type: "varchar", length: 45 })
    email: string;
  
    @ManyToOne(() => User, (user) => user.additionalEmails)
    user: User;
}