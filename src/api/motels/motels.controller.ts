import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  ParseUUIDPipe,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CreateMotelDto, UpdateMotelDto } from '@/shared/dtos';
import { Pagination } from '@/shared/utils/type';
import { MotelsService } from './motels.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import { FilesService } from '@/services/files/files.service';
import { multerOptions } from '@/shared/configs/multer.config';

@Controller('motels')
export class MotelsController {
  constructor(
    private readonly motelsService: MotelsService,
    private readonly filesService: FilesService,
  ) {}

  // create
  @Post()
  @UseInterceptors(FilesInterceptor('thumbnails', 20, multerOptions))
  async create(
    @Body() createMotelDto: CreateMotelDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    // Get image files
    const imageList = await this.filesService.uploadMutipleFiles(files);
    // Map to get image path
    const thumbnails = imageList.map?.((image) => image.path);
    // Filter properties of Product entity and response

    return await this.motelsService.create({ ...createMotelDto, thumbnails });
  }

  // update
  @Put()
  @UseInterceptors(FilesInterceptor('thumbnails', 20, multerOptions))
  async update(
    updateMotelDto: UpdateMotelDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    // Get image files
    const imageList = await this.filesService.uploadMutipleFiles(files);

    // Map to get image path
    const thumbnails = imageList.map?.((image) => image.path);

    return await this.motelsService.update({ ...updateMotelDto, thumbnails });
  }

  // delete
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.motelsService.softDelete(id);
  }

  // find by id
  @Post(':id')
  async findById(@Body() body) {
    return await this.motelsService.findById(body.id);
  }

  // find and pagination
  @Get()
  async findAndPagination(@Query() paginate: Pagination) {
    return await this.motelsService.findAndPagination(paginate);
  }
}
