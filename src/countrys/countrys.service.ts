import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class CountrysService {
    constructor(private prisma: PrismaService) {}

    findAll() {
        return this.prisma.Country.findMany();
    }
}
