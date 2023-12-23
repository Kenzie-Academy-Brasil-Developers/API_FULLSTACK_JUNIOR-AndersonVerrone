import * as bcrypt from "bcryptjs";
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { UserContact, UserEmail } from ".";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 60 })
  fullName: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  password: string;

  @Column({ type: "varchar", length: 30 })
  contact: string;

  @OneToMany(() => UserEmail, (email) => email.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "userId" })
  additionalEmails: UserEmail[];

  @OneToMany(() => UserContact, (userContact) => userContact.user, {
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: "userId" })
  additionalContacts: UserContact[];

  @CreateDateColumn({ type: "date" })
  createdAt: string | Date;

  @UpdateDateColumn({ type: "date" })
  updatedAt: string | Date;

  @BeforeInsert()
  hashUserPassword() {
    this.password = bcrypt.hashSync(this.password, 10);
  }

  @BeforeUpdate()
  hashPassword() {
    const isEncrypted: number = bcrypt.getRounds(this.password);
    if (!isEncrypted) {
      this.password = bcrypt.hashSync(this.password, 10);
    }
  }
}
