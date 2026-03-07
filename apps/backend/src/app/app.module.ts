import { AuthModule } from '@mguay/nestjs-better-auth';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { createAuth } from '../../lib/auth.instance';
import { ApiKeyGuard } from './guards/api-key.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule.forRootAsync({
      imports: [PrismaModule],
      useFactory: (prisma: PrismaService) => ({
        auth: createAuth(prisma),
      }),
      inject: [PrismaService],
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ApiKeyGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
