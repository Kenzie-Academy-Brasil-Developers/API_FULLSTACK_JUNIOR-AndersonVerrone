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
  
    @Column({ type: "varchar", length: 45, unique: false })
    email: string;
  
    @Column({ type: "varchar", length: 30 })
    contact: string;
  
    @CreateDateColumn({ type: "date" })
    createdAt: string | Date;
  
    @UpdateDateColumn({ type: "date" })
    updatedAt: string | Date;
  
    @OneToMany(() => CustomerEmail, (email) => email.customer, {
      cascade: true,
      eager: true,
    })
    @JoinColumn({ name: "customerId" })
    additionalEmails: CustomerEmail[];
  
    @OneToMany(() => CustomerContact, (customerContact) => customerContact.customer, {
      cascade: true,
      eager: true,
    })
    @JoinColumn({ name: "customerId" })
    additionalContacts: CustomerContact[];
  }
  