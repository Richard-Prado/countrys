import { Controller, Get } from '@nestjs/common';
import { CountrysService } from './countrys.service';

@Controller('countrys')
export class CountrysController {
    constructor(private readonly countryService: CountrysService) {}

    @Get()
    findAll(){
        return this.countryService.findAll()
    }
}
