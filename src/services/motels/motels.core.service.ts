import { CreateMotelDto, UpdateMotelDto } from '@/shared/dtos';
import { MotelEntity } from '@/shared/entities';
import { Pagination } from '@/shared/utils/type';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MotelsCoreService {
  constructor(
    @InjectRepository(MotelEntity)
    private readonly motelRepo: Repository<MotelEntity>,
  ) {}

  // create
  async create(createMotelDto: CreateMotelDto) {
    // TODO: upload thumbnails
    // if (createMotelDto.thumnails && createMotelDto.thumnails.length > 0) {

    // }
    const newMotel = this.motelRepo.create(createMotelDto);
    return await this.motelRepo.save(newMotel);
  }

  // update
  async update(updateMotelDto: UpdateMotelDto) {
    // TODO: upload thumbnails

    // TODO: update motel detail

    return await this.motelRepo.save(updateMotelDto);
  }

  // delete
  async softDelete(id: string) {
    return await this.motelRepo.softDelete(id);
  }

  // find by id
  async findById(id: string) {
    return await this.motelRepo.findOne({
      where: {
        ID: id,
      },
      relations: ['details', 'comments', 'owner'],
    });
  }

  // find and pagination
  async findAndPagination(pagination: Pagination) {
    const [list, count] = await this.motelRepo.findAndCount({
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
