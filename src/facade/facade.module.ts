import { Module } from '@nestjs/common';
import { FacadeController } from './controller/facade.controller';
import { FacadeService } from './services/facade.service';
import { ServiceAService } from './services/service-a.service';
import { ServiceBService } from './services/service-b.service';

@Module({
  controllers: [FacadeController],
  providers: [FacadeService, ServiceAService, ServiceBService]
})
export class FacadeModule { }
