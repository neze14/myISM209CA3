import { CreateBioDataDto } from '../../bio-data/dto/create-bio-data.dto';

export class CreateLinkedIdentityDto {
    readonly nationalIdentityNumber: number;
    readonly bankVerificationNumber: number;
    readonly mobiileNumber?: number;
    static BioData: CreateBioDataDto; //In case you want to create bioData along with linkedIdentity 
}