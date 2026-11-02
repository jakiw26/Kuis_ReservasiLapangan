import { Injectable, NotFoundException } from '@nestjs/common';
import { fields } from '../data/fields.data.js';

@Injectable()
export class FieldsService {
  findAll() {
    return fields;
  }

  findOne(id: number) {
    const field = fields.find((item) => item.id === id);

    if (!field) {
      throw new NotFoundException('Lapangan tidak ditemukan');
    }

    return field;
  }
}