import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators'

fromEvent(document, 'mousemove')
    .pipe(filter(event => (event.currentTarget as HTMLElement).childElementCount < 10))
    .subscribe(event => {
        console.log((event.target as HTMLElement)?.innerText);
    });