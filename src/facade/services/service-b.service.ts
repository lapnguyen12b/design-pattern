import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceBService {
  public methodB(): string {
    return 'Method B called from Service B';
  }
}
