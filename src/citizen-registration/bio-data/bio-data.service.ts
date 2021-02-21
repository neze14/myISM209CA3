import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateBioDataDto } from './dto/create-bio-data.dto';
import { UpdateBioDataDto } from './dto/update-bio-data.dto';
import { BioData } from './entities/bio-data.entity';

@Injectable()
export class BioDataService {
  constructor(
    @InjectRepository(BioData)
    private bioDataRepository: Repository<BioData>
  ){}

  create(createBioDataDto: CreateBioDataDto) {
    return 'This action adds a new bioData';
  }

  findAll() {
    return `This action returns all bioData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bioData`;
  }

  update(id: number, updateBioDataDto: UpdateBioDataDto) {
    return `This action updates a #${id} bioData`;
  }

  remove(id: number) {
    return `This action removes a #${id} bioData`;
  }
}
