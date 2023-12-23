import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from ".";

@Entity("customer_contacts")
export class CustomerContact {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 15 })
    phoneNumber: string; // Número de telefone do contato adicional

    @Column()
    userId: number;

    @ManyToOne(() => Customer, (customer) => customer.additionalContacts)
    user: Customer;
}