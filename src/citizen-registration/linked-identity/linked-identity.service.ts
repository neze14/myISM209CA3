import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentity)
    private linkedIdentityRepository: Repository<LinkedIdentity>
  ){}

  create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return 'This action adds a new linkedIdentity';
  }

  findAll() {
    return `This action returns all linkedIdentity`;
  }

  findOne(id1: number) {
    return `This action returns a #${id1} linkedIdentity`;
  }

  update(id1: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return `This action updates a #${id1} linkedIdentity`;
  }

  remove(id1: number) {
    return `This action removes a #${id1} linkedIdentity`;
  }
}
