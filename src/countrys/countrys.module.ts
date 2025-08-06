import { Module } from '@nestjs/common';
import { CountrysService } from './countrys.service';
import { CountrysController } from './countrys.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  providers: [CountrysService],
  controllers: [CountrysController]
})
export class CountrysModule {}
