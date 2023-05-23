import { Injectable } from '@nestjs/common';

@Injectable()
export class ServiceAService {
  public methodA(): string {
    return 'Method A called from Service A';
  }
}
