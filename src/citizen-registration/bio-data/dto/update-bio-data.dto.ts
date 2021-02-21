import { PartialType } from '@nestjs/mapped-types';
import { CreateBioDataDto } from './create-bio-data.dto';

export class UpdateBioDataDto extends PartialType(CreateBioDataDto) {}
