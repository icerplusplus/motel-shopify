import { Controller, Get, Post, Put, Delete, Param, Query, Body, ParseUUIDPipe } from '@nestjs/common';
import { CreateMotelDto, UpdateMotelDto } from '@/shared/dtos';
import { Pagination } from '@/shared/utils/type';
import { MotelsService } from './motels.service';

@Controller('motels')
export class MotelsController {
  constructor(private readonly motelsService: MotelsService) {}

  // create
  @Post()
  async create(createMotelDto: CreateMotelDto) {
    return await this.motelsService.create(createMotelDto)
  }

  // update
  @Put()
  async update(updateMotelDto: UpdateMotelDto) {
    return await this.motelsService.update(updateMotelDto)
  }

  // delete
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.motelsService.softDelete(id)
  }

  // find by id
  @Post(':id')
  async findById(@Body() body) {
    return await this.motelsService.findById(body.id)
  }

  // find and pagination
  @Get()
  async findAndPagination(@Query() paginate: Pagination) {
    return await this.motelsService.findAndPagination(paginate)
  }
}
