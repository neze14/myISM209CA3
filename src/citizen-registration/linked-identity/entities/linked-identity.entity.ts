import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { BioData } from '../../bio-data/entities/bio-data.entity';

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

    @JoinColumn()
    @OneToOne(type => BioData, BioData => BioData.LinkedIdentity, {cascade: true})
    BioData:BioData;

}