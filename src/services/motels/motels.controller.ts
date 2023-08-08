import { Controller } from '@nestjs/common';
import { MotelsService } from './motels.service';

@Controller('motels')
export class MotelsController {
  constructor(private readonly motelsService: MotelsService) {}
}
