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
    private BioDataRepository: Repository<BioData>
  ){}

  async create(CreateBioDataDto: CreateBioDataDto) {
    // return 'This action adds a new bioData';
    const newBioData: BioData = this.BioDataRepository.create(CreateBioDataDto)
    return await this.BioDataRepository.save(newBioData);
  }

   async findAll() {
    // return `This action returns all bioData`;
    return await this.BioDataRepository.find();
  }

  async findOne(id: number) {
    // return `This action returns a #${id} bioData`;
    return await this.BioDataRepository.findOne(id);
  }

  async update(id: number, updateBioDataDto: UpdateBioDataDto) {
    // return `This action updates a #${id} bioData`;
    return await this.BioDataRepository.update(id, updateBioDataDto)
  }

  async remove(id: number) {
    // return `This action removes a #${id} bioData`;
    return await this.BioDataRepository.delete(id);
  }
}
