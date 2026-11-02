import { Injectable, NotFoundException } from '@nestjs/common';
import { fields } from '../data/fields.data.js';
import type { Field } from './interfaces/field.interface.js';

@Injectable()
export class FieldsService {
  findAll(): Field[] {
    return fields;
  }

  findOne(id: number): Field {
    const field = fields.find((item) => item.id === id);

    if (!field) {
      throw new NotFoundException('Lapangan tidak ditemukan');
    }

    return field;
  }
}