import {
  Body,
  Controller,
  Post,
  Put,
  Delete,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';
import { MotelDetailsService } from './motel-details.service';

@Controller('motel-details')
export class MotelDetailsController {
  constructor(private readonly motelDetailsService: MotelDetailsService) {}

  // create
  @Post()
  async create(@Body() body) {
    return await this.motelDetailsService.create(body);
  }

  // update
  @Put()
  async update(@Body() body) {
    return await this.motelDetailsService.update(body);
  }

  // soft delete
  @Delete(':id')
  async softDelete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.motelDetailsService.softDelete(id);
  }

  // find by id
  @Post('/find')
  async findById(@Body() body) {
    return await this.motelDetailsService.findById(body.id);
  }

  // find and pagination
  @Post('/find-and-pagination')
  async findAndPagination(@Body() body) {
    const { id, ...paginate } = body;
    return await this.motelDetailsService.findAndPagination(id, paginate);
  }
}
