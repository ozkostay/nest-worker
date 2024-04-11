import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Worker } from 'node:worker_threads';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Get('cicl1')
  cicl1(): any {
    console.log('controller cicl1');
    return this.workService.cicl1();
  }

  @Get('cicl2')
  async cicl2(): Promise<any> {
    console.log('controller cicl2');
    return this.workService.cicl2();
  }

  @Post()
  create(@Body() createWorkDto: CreateWorkDto) {
    return this.workService.create(createWorkDto);
  }

  @Get()
  findAll() {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: UpdateWorkDto) {
    return this.workService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(+id);
  }
}
