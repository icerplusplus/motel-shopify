import { MotelsCoreService } from '@/services/motels/motels.core.service';
import { CreateMotelDto, UpdateMotelDto } from '@/shared/dtos';
import { Pagination } from '@/shared/utils/type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MotelsService {
  constructor(private readonly motelCoreRepo: MotelsCoreService) {}

  // create
  async create(createMotelDto: CreateMotelDto) {
    // TODO: upload thumbnails
    // if (createMotelDto.thumnails && createMotelDto.thumnails.length > 0) {

    // }
    return await this.motelCoreRepo.create(createMotelDto);
  }

  // update
  async update(updateMotelDto: UpdateMotelDto) {
    // TODO: upload thumbnails

    // TODO: update motel detail

    return await this.motelCoreRepo.update(updateMotelDto);
  }

  // delete
  async softDelete(id: string) {
    return await this.motelCoreRepo.softDelete(id);
  }

  // find by id
  async findById(id: string) {
    return await this.motelCoreRepo.findById(id);
  }

  // find and pagination
  async findAndPagination(pagination: Pagination) {
    return await this.motelCoreRepo.findAndPagination(pagination);
  }
}
