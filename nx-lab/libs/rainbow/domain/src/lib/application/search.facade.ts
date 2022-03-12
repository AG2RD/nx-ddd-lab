import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Emma } from '../entities/emma';
import { EmmaDataService } from '../infrastructure/emma.data.service';

@Injectable({ providedIn: 'root' })
export class SearchFacade {
  private emmaListSubject = new BehaviorSubject<Emma[]>([]);
  emmaList$ = this.emmaListSubject.asObservable();

  constructor(private emmaDataService: EmmaDataService) {}

  load(): void {
    this.emmaDataService.load().subscribe({
      next: (emmaList) => {
        this.emmaListSubject.next(emmaList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
