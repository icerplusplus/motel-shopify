import { MotelDetailsCoreService } from '@/services/motel-details/motel-details.core.service';
import { MotelsCoreService } from '@/services/motels/motels.core.service';
import { CreateMotelDetailDto, UpdateMotelDetailDto } from '@/shared/dtos';
import { Pagination } from '@/shared/utils/type';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class MotelDetailsService {
  constructor(
    private readonly motelCoreService: MotelsCoreService,
    private readonly motelDetailCoreService: MotelDetailsCoreService,
  ) {}

  // create
  async create(createMotelDetailDto: CreateMotelDetailDto) {
    // find motel
    const motel = await this.motelCoreService.findById(
      createMotelDetailDto.motel,
    );

    if (!motel) throw new BadRequestException('Motel ID not found');

    // create service
    return await this.motelDetailCoreService.create({
      ...createMotelDetailDto,
      motel,
    });
  }

  // update
  async update(updateMotelDetailDto: UpdateMotelDetailDto) {
    // find motel detail
    const motelDetail = await this.motelDetailCoreService.findById(
      updateMotelDetailDto.ID,
    );

    if (!motelDetail) throw new BadRequestException('MotelDetail ID not found');

    // find motel
    const motel = await this.motelCoreService.findById(
      updateMotelDetailDto.motel,
    );

    if (!motel) throw new BadRequestException('Motel ID not found');

    // update service
    return await this.motelDetailCoreService.update({
      ...motelDetail,
      ...updateMotelDetailDto,
      motel,
    });
  }

  // soft delete
  async softDelete(id: string) {
    const motelDetailDeleted = await this.motelDetailCoreService.softDelete(id);

    if (motelDetailDeleted.affected < 1)
      throw new ConflictException('Cannot delete this motel detail');

    return {
      message: 'Delete successfully',
    };
  }

  // find by id
  async findById(id: string) {
    if (!id) throw new BadRequestException('MotelDetail not found');

    const motelDetail = await this.motelDetailCoreService.findById(id);

    if (!motelDetail)
      throw new NotFoundException('Cannot find this motel detail');

    // find service
    return motelDetail;
  }

  // find and pagination
  async findAndPagination(motelId: string, pagination: Pagination) {
    return await this.motelDetailCoreService.findAndPagination(
      motelId,
      pagination,
    );
  }
}
