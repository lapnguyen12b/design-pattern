import { Controller, Get } from '@nestjs/common';
import { FacadeService } from '../services/facade.service';
import { ServiceAService } from '../services/service-a.service';
import { ServiceBService } from '../services/service-b.service';

@Controller('facade')
export class FacadeController {
  constructor(
    private readonly facadeService: FacadeService,
    private readonly serviceA: ServiceAService,
    private readonly serviceB: ServiceBService,
  ) { }

  @Get()
  public getData(): string {
    const result = this.facadeService.doSomething();
    return result;
  }

  // non-facade
  @Get('/non-facade')
  public getData2(): string {
    const resultA = this.serviceA.methodA();
    const resultB = this.serviceB.methodB();

    return `${resultA} ---------- ${resultB}`;
  }
}
