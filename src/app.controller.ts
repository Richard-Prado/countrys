import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller('country')
export class AppController {

  constructor(private readonly prisma: PrismaService) {}

  @Get()
  FindAll(): string {
    return 'Retorno';
  }
}
