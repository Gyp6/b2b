import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const apiKey = request.headers['x-api-secret'];

    if (apiKey !== this.configService.getOrThrow('INTERNAL_API_KEY')) {
      throw new UnauthorizedException('Invalid Internal API Key');
    }

    return true;
  }
}
