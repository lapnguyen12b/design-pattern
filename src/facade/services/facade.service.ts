import { Injectable } from '@nestjs/common';
import { ServiceAService } from './service-a.service';
import { ServiceBService } from './service-b.service';

@Injectable()
export class FacadeService {
  constructor(
    private readonly serviceA: ServiceAService,
    private readonly serviceB: ServiceBService,
  ) { }

  public doSomething(): string {
    const resultA = this.serviceA.methodA();
    const resultB = this.serviceB.methodB();

    return `${resultA} || ${resultB}`;
  }
}
