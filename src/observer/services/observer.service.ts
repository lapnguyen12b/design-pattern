// import { Injectable } from '@nestjs/common';

// @Injectable()
export class ObserverService {
  namePick = ''

  constructor(name: string) {
    this.namePick = name
  }

  public updateStatus(location: string): string {
    return this.pingGotoHelp(location)
  }

  public pingGotoHelp(location: string): string {
    console.log(`Hey, ${this.namePick} my store Open in: ${location}`)
    return `Hey, ${this.namePick} my store Open in: ${location}`
  }
}
