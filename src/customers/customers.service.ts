import { Injectable, NotFoundException } from '@nestjs/common';
import { customers } from '../data/customers.data.js';
import type { Customer } from './interfaces/customer.interface.js';

@Injectable()
export class CustomersService {

  findAll(): Customer[] {
    return customers;
  }

  findOne(id: number): Customer {
    const customer = customers.find((item) => item.id === id);

    if (!customer) {
      throw new NotFoundException('Pelanggan tidak ditemukan');
    }

    return customer;
  }
}