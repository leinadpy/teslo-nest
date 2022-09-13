import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators';

import { Auth } from 'src/auth/decorators';
import { ValidRoles } from '../auth/interfaces/valid-roles';

import { SeedService } from './seed.service';

@ApiTags('Seed')
@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth(ValidRoles.admin)
  executeSeed() {
    return this.seedService.runSeed();
  }
}
