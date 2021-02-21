import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { LinkedIdentityService } from './linked-identity.service';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';

@Controller('linked-identity')
export class LinkedIdentityController {
  constructor(private readonly linkedIdentityService: LinkedIdentityService) {}

  @Post()
  create(@Body() createLinkedIdentityDto: CreateLinkedIdentityDto) {
    return this.linkedIdentityService.create(createLinkedIdentityDto);
  }

  @Get()
  findAll() {
    return this.linkedIdentityService.findAll();
  }

  @Get(':id1')
  findOne(@Param('id1') id1: string) {
    return this.linkedIdentityService.findOne(+id1);
  }

  @Put(':id1')
  update(@Param('id1') id1: string, @Body() updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return this.linkedIdentityService.update(+id1, updateLinkedIdentityDto);
  }

  @Delete(':id1')
  remove(@Param('id1') id1: string) {
    return this.linkedIdentityService.remove(+id1);
  }
}
