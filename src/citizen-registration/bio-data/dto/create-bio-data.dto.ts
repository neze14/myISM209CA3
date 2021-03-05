import { CreateLinkedIdentityDto } from '../../linked-identity/dto/create-linked-identity.dto';
export class CreateBioDataDto {
    readonly firstname: string;
    readonly middleName?: string;
    readonly lastName: string;
    readonly dateOfBirth: Date;
    readonly nationality: string;
    readonly countryOfBirth: string;
    readonly stateOfBirth?: string;
    readonly townOfBirth?: string;
    readonly residenceAddress?: string;
    readonly profession: string;
    static LinkedIdenitiy: CreateLinkedIdentityDto;
}