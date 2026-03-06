// lib/auth.instance.ts
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { PrismaService } from '../src/prisma/prisma.service';

export const createAuth = (prisma: PrismaService) => {
  return betterAuth({
    database: prismaAdapter(prisma, {
      provider: 'postgresql',
    }),
  });
};

export const auth = betterAuth({
  database: prismaAdapter(
    {},
    {
      provider: 'postgresql',
    },
  ),
});

export type Auth = ReturnType<typeof createAuth>;
