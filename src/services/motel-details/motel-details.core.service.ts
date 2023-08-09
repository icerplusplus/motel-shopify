import {
  CreateMotelDetailParams,
  UpdateMotelDetailParams,
} from '@/shared/dtos';
import { MotelDetailEntity } from '@/shared/entities';
import { Pagination } from '@/shared/utils/type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MotelDetailsCoreService {
  constructor(
    @InjectRepository(MotelDetailEntity)
    private readonly motelDetailRepo: Repository<MotelDetailEntity>,
  ) {}

  // create
  async create(createMotelDetailDto: CreateMotelDetailParams) {
    const newMotelDetail = this.motelDetailRepo.create(createMotelDetailDto);
    return await this.motelDetailRepo.save(newMotelDetail);
  }

  // update
  async update(updateMotelDetailDto: UpdateMotelDetailParams) {
    return await this.motelDetailRepo.save(updateMotelDetailDto);
  }

  // soft delete
  async softDelete(id: string) {
    return await this.motelDetailRepo.softDelete(id);
  }

  // find by id
  async findById(id: string) {
    return await this.motelDetailRepo.findOne({
      where: { ID: id },
      relations: ['motel'],
    });
  }

  // find and pagination
  async findAndPagination(motelId: string, pagination: Pagination) {
    const [list, count] = await this.motelDetailRepo.findAndCount({
      where: {
        motel: {
          ID: motelId,
        },
      },
      order: {
        CreatedAt: 'DESC',
      },
      skip: (pagination.page - 1) * pagination.size,
      take: pagination.size,
    });

    return {
      motels: list,
      pagination: {
        ...pagination,
        count,
      },
    };
  }
}
