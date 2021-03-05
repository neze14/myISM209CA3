import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { BioData } from '../bio-data/entities/bio-data.entity';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { CreateBioDataDto } from '../bio-data/dto/create-bio-data.dto';

@Injectable()
export class LinkedIdentityService {

  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository<LinkedIdentity>

    @InjectRepository(BioData)
    private BioDataRepository: Repository<BioData>
  ){}

  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    const newLinkedIdentity = this.linkedIdentityRepository.create(createLinkedIdentityDto);

    if(CreateLinkedIdentityDto.BioData) {
      const newLinkedIdentity = this.linkedIdentityRepository.create(CreateBioDataDto.LinkedIdenitiy);
      const BioData: BioData = await this.BioDataRepository.save(newBioData);
      newLinkedIdentity.BioData = BioData;
    }
    return this.linkedIdentityRepository.save(newLinkedIdentity)
    // return 'This action adds a new likedIdentity';
  }

  async findAll() {
    // return `This action returns all linkedIdentity`;
    return await this.linkedIdentityRepository.find({relations: ['bio-data']});
  }

  async findOne(id: number) {
    // return `This action returns a #${id} linkedIdentity`;
    return await this.linkedIdentityRepository.findOne(id);
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    // return `This action updates a #${id} linkedIdentity`;
    return await this.linkedIdentityRepository.update(id, updateLinkedIdentityDto);
  }

  async remove(id: number) {
    // return `This action removes a #${id} linkedIdentity`;
    return await this.linkedIdentityRepository.delete(id)
  }

  async setBioDataById(linkedIdentityId: number, bioDataId: number) {
    try {
      return await this.linkedIdentityRepository.createQueryBuilder()
      .relation(LinkedIdentity, "Linked identity")
      .of(linkedIdentityId)
      .set(bioDataId)
    } 
    catch (error) {
      throw new HttpException({
        status:
        HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting linked-identity for this
        citizen: ${error.message}`,
      },
       HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetBioDataById(linkedIdentityId: number) {
    try {
      return await this.linkedIdentityRepository.createQueryBuilder()
      .relation(LinkedIdentity, "Linked identity")
      .of(linkedIdentityId)
      .set(null)
    } 
    catch (error) {
      throw new HttpException({
        status:
        HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting linked-identity for this
        citizen: ${error.message}`,
      },
       HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
