import { existsSync, mkdirSync } from 'fs';

interface UploadDirectory {
  folderName: string;
  root?: string;
}

export const getDatePath = ({
  folderName = 'images',
  root = 'uploads',
}: UploadDirectory): string => {
  const date = new Date();
  // Generate folder path each every day
  const path = [
    folderName,
    date.getDate().toString(),
    (date.getMonth() + 1).toString(),
    date.getFullYear().toString(),
  ].join('-');

  const rootFolderUpload = root + '/' + path;
  // Create folder if doesn't exist
  if (!existsSync(rootFolderUpload)) {
    mkdirSync(rootFolderUpload);
  }

  return path;
};
