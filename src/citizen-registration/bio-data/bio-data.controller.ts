import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDataDto } from './dto/create-bio-data.dto';
import { UpdateBioDataDto } from './dto/update-bio-data.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) {}

  @Post()
  create(@Body() createBioDataDto: CreateBioDataDto) {
    return this.bioDataService.create(createBioDataDto);
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioDataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBioDataDto: UpdateBioDataDto) {
    return this.bioDataService.update(+id, updateBioDataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioDataService.remove(+id);
  }

  @Get('create')
  @Render('citizen/create-registration.html')
  createForm(){}
}
