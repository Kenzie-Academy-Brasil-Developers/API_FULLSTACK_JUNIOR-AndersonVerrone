import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from ".";

@Entity("customer_emails")
export class CustomerEmail {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column({ type: "varchar", length: 45 })
    email: string;
  
    @Column()
    userId: number;
  
    @ManyToOne(() => Customer, (customer) => customer.additionalEmails)
    user: Customer;
}