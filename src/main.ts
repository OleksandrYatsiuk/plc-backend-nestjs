import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './filters/all-exceptions';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('PLC API')
    .setDescription('Practical Legal Courses Backend API Documentation')
    .addBearerAuth()
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
  app.useGlobalFilters(new AllExceptionsFilter())

  await app.listen(process.env.PORT || 3000);
  console.log(`\n Application is running on: ${await app.getUrl()}`);
}
bootstrap();
