import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormconfigService } from './typeormconfig/typeormconfig.service';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeormconfigService
          })
    ],
    providers: [TypeormconfigService]
})

export class DatabaseModule {}
