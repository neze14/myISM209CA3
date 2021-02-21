import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LinkedIdentity {
    @PrimaryGeneratedColumn()
    id1: number;

    @Column()
    nationalIdentityNumber: number;

    @Column()
    bankVerificationNumber: number;

    @Column({nullable: true})
    mobileNumber: number;
}
