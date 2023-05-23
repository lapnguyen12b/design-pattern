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
