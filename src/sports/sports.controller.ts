import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { SportsService } from './sports.service.js';
import type { Sport } from './interfaces/sport.interface.js';

@Controller('sports')
export class SportsController {
  constructor(private readonly sportsService: SportsService) {}

  @Get()
  findAll(): Sport[] {
    return this.sportsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Sport {
    return this.sportsService.findOne(id);
  }
}