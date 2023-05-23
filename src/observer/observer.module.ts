import { Module } from '@nestjs/common';
import { SubjectObserverService } from './services/subject-observer.service';
import { ObserverService } from './services/observer.service';
import { RunObserverService } from './services/run-observer.service';
import { ObserverController } from './controllers/observer.controller';

@Module({
  controllers: [ObserverController],
  providers: [SubjectObserverService, ObserverService, RunObserverService]
})
export class ObserverModule { }
