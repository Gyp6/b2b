import { AuthModule } from '@mguay/nestjs-better-auth';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { createAuth } from '../lib/auth.instance';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';

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
  providers: [],
})
export class AppModule {}
