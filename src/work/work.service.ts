import { Injectable } from '@nestjs/common';
import { CreateWorkDto } from './dto/create-work.dto';
import { UpdateWorkDto } from './dto/update-work.dto';
import { Worker } from 'node:worker_threads';

@Injectable()
export class WorkService {
  // constructor() {}
  private readonly count: number = 15000000000;

  cicl1() {
    return new Promise((resolve) => {
      const worker = new Worker('./src/work/worker1.js');

      worker.on('message', (message) => {
        console.log(`Main thread received message: ${message}`);
        resolve(message);
      });
      worker.postMessage('Hello from main thread !');
    });
  }

  cicl2() {
    return new Promise((resolve) => {
      const worker = new Worker('./src/work/worker2.js');

      worker.on('message', (message) => {
        console.log(`Main thread received message: ${message}`);
        resolve(message);
      });
      worker.postMessage('Hello from main thread !');
    });
  }

  create(createWorkDto: CreateWorkDto) {
    return 'This action adds a new work';
  }

  findAll() {
    return `This action returns all work`;
  }

  findOne(id: number) {
    return `This action returns a #${id} work`;
  }

  update(id: number, updateWorkDto: UpdateWorkDto) {
    return `This action updates a #${id} work`;
  }

  remove(id: number) {
    return `This action removes a #${id} work`;
  }
}
