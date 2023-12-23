import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1703364806474 implements MigrationInterface {
    name = 'InitialMigration1703364806474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_emails" ("id" SERIAL NOT NULL, "email" character varying(45) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_3ef6c4be97ba94ea3ba65362ad0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_contacts" ("id" SERIAL NOT NULL, "phoneNumber" character varying(15) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_c7048d25b5fda1fa70501fac9ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "fullName" character varying(60) NOT NULL, "email" character varying(45) NOT NULL, "contact" character varying(30) NOT NULL, "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_emails" ("id" SERIAL NOT NULL, "email" character varying(45) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_b5972208928e94f26e453c6d936" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customer_contacts" ("id" SERIAL NOT NULL, "phoneNumber" character varying(15) NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_bde619dbcb45a3e4d542e137bd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "full_name"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone_number"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "registration_date"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "delete_date"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "fullName" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "contact" character varying(30) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "updatedAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(45) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(120) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_emails" ADD CONSTRAINT "FK_569342223a28f006d9bf897c7c9" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_contacts" ADD CONSTRAINT "FK_30fcfbc780a02d200e0589b2886" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_emails" ADD CONSTRAINT "FK_8f0d8f0e452adae74a8b6a26cbd" FOREIGN KEY ("userId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customer_contacts" ADD CONSTRAINT "FK_072a04f20aec1817322c314e891" FOREIGN KEY ("userId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer_contacts" DROP CONSTRAINT "FK_072a04f20aec1817322c314e891"`);
        await queryRunner.query(`ALTER TABLE "customer_emails" DROP CONSTRAINT "FK_8f0d8f0e452adae74a8b6a26cbd"`);
        await queryRunner.query(`ALTER TABLE "user_contacts" DROP CONSTRAINT "FK_30fcfbc780a02d200e0589b2886"`);
        await queryRunner.query(`ALTER TABLE "user_emails" DROP CONSTRAINT "FK_569342223a28f006d9bf897c7c9"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "email" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "contact"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "fullName"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "delete_date" date`);
        await queryRunner.query(`ALTER TABLE "users" ADD "registration_date" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone_number" character varying(20) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "full_name" character varying(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE "customer_contacts"`);
        await queryRunner.query(`DROP TABLE "customer_emails"`);
        await queryRunner.query(`DROP TABLE "customer"`);
        await queryRunner.query(`DROP TABLE "user_contacts"`);
        await queryRunner.query(`DROP TABLE "user_emails"`);
    }

}
