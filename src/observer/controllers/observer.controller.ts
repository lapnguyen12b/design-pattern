import { Controller, Get, Query } from '@nestjs/common';
import { RunObserverService } from '../services/run-observer.service';

@Controller('observer')
export class ObserverController {
  constructor(private readonly runObserverService: RunObserverService) { }

  @Get('ping')
  async runObserver(
    @Query('location') location: string,
  ): Promise<void> {
    return this.runObserverService.runObserver(location)
  }
}
