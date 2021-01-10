import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Nest JS api')
    .setDescription('The nest API description')
    .addBearerAuth()
    .setVersion('1.0')
    .addTag('Users', 'Users Management')
    .addTag('Courses', 'Courses Management')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen(process.env.PORT || 3000);
  console.log(`\n Application is running on: ${await app.getUrl()}`);
}
bootstrap();
