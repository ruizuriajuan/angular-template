import { Component } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent {

  constructor() {
    const obs = new Observable(observer => {
      let i = 0;
      setInterval(() => {
        i++;
        observer.next(i); //emite el valor al suscriptor
        if (i == 4) {
          observer.complete();
        }
        if (i == 2) {
          observer.error('error esta en el 2');
        }
        console.log('tick'); //sigue ejecutandose
      }, 1000);
    });
/*
    obs.pipe(
      retry(3)
    ).subscribe({
      next: (valor) => console.log('subs:', valor),
      error: (e) => console.warn('Error', e),
      complete: () => console.info('completado')
    });*/
  }

}
