import { HttpException, HttpStatus } from '@nestjs/common';
import { diskStorage } from 'multer';
import * as path from 'path';

export const storegeConfig = (folder: string) => {
  return diskStorage({
    destination: `./uploads/${folder}`,
    filename(req, file, callback) {
      callback(null, Date.now() + '-' + file.originalname);
    },
  });
};

export const fileExtensionFilter = (req: any, file: any, callback: any) => {
  const ext = path.extname(file.originalname);

  if (ext !== '.jpg' && ext !== '.png' && ext !== '.jpeg') {
    req.fileValidationError = 'Invalid file type';
    return callback(
      new HttpException(
        `Unsupported file type ${path.extname(file.originalname)}`,
        HttpStatus.BAD_REQUEST,
      ),
      false,
    );
  } else {
    return callback(null, true);
  }
};
