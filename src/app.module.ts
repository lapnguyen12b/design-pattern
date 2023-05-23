import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ObserverModule } from './observer/observer.module';
import { FacadeModule } from './facade/facade.module';
import { ServiceAService } from './facade/services/service-a.service';
import { ServiceBService } from './facade/services/service-b.service';

@Module({
  controllers: [AppController],
  providers: [AppService, ServiceAService, ServiceBService],
  imports: [ObserverModule, FacadeModule],
})
export class AppModule { }
