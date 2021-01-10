import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const statusCode = exception.response?.statusCode || HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception.response?.message || exception.response.message;
    response.status(statusCode).json({ statusCode, message });
  }
}