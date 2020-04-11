import { BehaviorSubject, Observable } from 'rxjs';

export class StateService {
    private stateSubject: BehaviorSubject<string> = new BehaviorSubject('');

    set searchCriteria(value: string) {
        // emits the value to subscribers
        console.log(`[StateService] value = ${value}`)
        this.stateSubject.next(value);
    }

    // components will use this method to subscribe
    getState(): Observable<string> {
        return this.stateSubject.asObservable();
    }
}