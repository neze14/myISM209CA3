import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Let's make it a NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';

//To synthesize the directory path which will contain templates
import { join } from 'path';

//We need nunjucks as render engine
import * as nunjucks from 'nunjucks';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  /*To associate nunjucks with express, the underlying express 
  platform is gotten from Nest app */
  const express = app.getHttpAdapter().getInstance();

  /*Reference to directory named views ,
  which is the root directory for the template files*/
  const views = join(__dirname, '..', 'views');

  /*Reference to directory named static ,
  which is the root directory for the css and image files*/
  const staticAssets = join(__dirname, '..', 'static');
  app.useStaticAssets(staticAssets);

  /*Finally, configure nunjucks, setting views and express
  declared above*/
  nunjucks.configure(views, { express }); 

  //To start application i.e http://localhost:3000
  await app.listen(3000);
}
bootstrap();