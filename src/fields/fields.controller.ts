import { Controller, Get, Param, ParseIntPipe , Query} from '@nestjs/common';
import { FieldsService } from './fields.service.js';
import type { Field } from './interfaces/field.interface.js';

@Controller('fields')
export class FieldsController {
    constructor(private readonly fieldsService: FieldsService) { }

    @Get()
    findAll(): Field[] {
        return this.fieldsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Field {
        return this.fieldsService.findOne(id);
    }

    @Get(':id/availability')
    getAvailability(
        @Param('id', ParseIntPipe) id: number,
        @Query('date') date: string,
    ) {
        return this.fieldsService.getAvailability(id, date);
    }
}