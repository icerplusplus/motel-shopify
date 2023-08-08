import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { DATABASE } from '../utils/variables';

export const dbOptions: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: DATABASE.DB_HOST,
  port: DATABASE.DB_PORT,
  username: DATABASE.DB_USERNAME,
  password: DATABASE.DB_PASSWORD,
  database: DATABASE.DB_NAME,
  entities: [join(__dirname, '../**', '*.entity.{ts,js}')],
  extra: {
    trustServerCertificate: true,
  },
  synchronize: true,
  autoLoadEntities: true,
};
