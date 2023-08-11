import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Multer upload options
export const multerOptions = {
  // Check the mimetypes to allow for upload
  fileFilter: (req: any, file: any, callback: any) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
      // Create folder if doesn't exist
      if (!existsSync(process.env.UPLOAD_LOCATION)) {
        mkdirSync(process.env.UPLOAD_LOCATION);
      }

      // Allow storage of file
      callback(null, true);
    } else {
      // Reject file
      callback(
        new HttpException(
          `Unsupported file type ${extname(file.originalname)}`,
          HttpStatus.BAD_REQUEST,
        ),
        false,
      );
    }
  },
  // Storage properties
  storage: diskStorage({
    destination: process.env.UPLOAD_LOCATION || './uploads',
    filename: (req, file, callback) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const extension = extname(file.originalname);
      callback(null, `${uniqueSuffix}${extension}`);
    },
  }),
} as any;
