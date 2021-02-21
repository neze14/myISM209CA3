import { TypeOrmModule } from "@nestjs/typeorm"

import {TypeOrmModuleOptions} from '@nestjs/typeorm'

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    database: 'nestca-db',
    entities: [
        "dist/**/*.entity{.ts,.js}"
    ],
    synchronize: true
}