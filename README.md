## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# tests
$ curl --location 'http://localhost:3000/observer/ping?location=HCM City'
```

observer.controller.ts

```nodejs
import { Controller, Get, Query } from '@nestjs/common';
import { RunObserverService } from './run-observer.service';

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
```

run-observer.service.ts

```nodejs
import { Injectable } from '@nestjs/common';
import { SubjectObserverService } from './subject-observer.service';
import { ObserverService } from './observer.service';

@Injectable()
export class RunObserverService {
  runObserver(localtion: string) {
    const subject = new SubjectObserverService()

    //create member
    const ironMan = new ObserverService('Member A')
    const spiderMan = new ObserverService('Member B')

    //add to Teams
    subject.addObserver(ironMan)
    subject.addObserver(spiderMan)

    //push location
    subject.notify(localtion)
  }
}
```

subject-observer.service.ts

```nodejs
import { Injectable } from '@nestjs/common';
import { ObserverService } from './observer.service';

@Injectable()
export class SubjectObserverService {
  observerList: ObserverService[] = []

  constructor() {
    this.observerList = []
  }

  public addObserver(observer: ObserverService) {
    this.observerList.push(observer)
  }

  public notify(location: string): void {
    this.observerList.forEach(observer => {
      observer.updateStatus(location)
    })
  }
}
```

observer.service.ts

```nodejs
import { Injectable } from '@nestjs/common';

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
```
