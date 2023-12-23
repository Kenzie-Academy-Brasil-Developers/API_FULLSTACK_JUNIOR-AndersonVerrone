import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  import { CustomerContact, CustomerEmail } from ".";
  
  @Entity("customer")
  export class Customer {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ type: "varchar", length: 60 })
    fullName: string;
  
    @Column({ type: "varchar", length: 45, unique: true })
    email: string;
  
    @Column({ type: "varchar", length: 30 })
    contact: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string | Date;
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string | Date;
  
    @OneToMany(() => CustomerEmail, (email) => email.user, {
      cascade: true,
      eager: true,
    })
    @JoinColumn({ name: "userId" })
    additionalEmails: CustomerEmail[];
  
    @OneToMany(() => CustomerContact, (customerContact) => customerContact.user, {
      cascade: true,
      eager: true,
    })
    @JoinColumn({ name: "userId" })
    additionalContacts: CustomerContact[];
  }
  