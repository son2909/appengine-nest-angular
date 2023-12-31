import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { HTTPLoggingInterceptor } from './interceptors/request.interceptor';
import { ResponseTransformInterceptor } from './interceptors/response.transform.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { ValidationConfig } from './config/validation.config';

const HOST = '0.0.0.0';
const PORT = Number(process.env.PORT) || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
  });
  app.enableCors();

  app.use(loggerMiddleware);
  app.useGlobalInterceptors(new HTTPLoggingInterceptor());
  app.useGlobalInterceptors(new ResponseTransformInterceptor());
  app.useGlobalPipes(new ValidationPipe(ValidationConfig));

  await app.listen(PORT, HOST).then(() => {
    console.log(
      `** Nest Live Development Server is listening on ${HOST}:${PORT}, open your browser on http://localhost:${PORT}/ **`,
    );
  });
}

bootstrap();
