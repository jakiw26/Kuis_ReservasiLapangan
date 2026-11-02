import { Injectable, NotFoundException } from '@nestjs/common';
import { sports } from '../data/sports.data.js';
import type { Sport } from './interfaces/sport.interface.js';

@Injectable()
export class SportsService {

  findAll(): Sport[] {
    return sports;
  }

  findOne(id: number): Sport {
    const sport = sports.find((item) => item.id === id);

    if (!sport) {
      throw new NotFoundException('Jenis olahraga tidak ditemukan');
    }

    return sport;
  }
}