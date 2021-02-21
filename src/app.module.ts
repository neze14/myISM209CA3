import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitizenRegistrationModule } from './citizen-registration/citizen-registration.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './orm.config'; //import configuration 

@Module({
  imports: [TypeOrmModule.forRoot(config), CitizenRegistrationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
