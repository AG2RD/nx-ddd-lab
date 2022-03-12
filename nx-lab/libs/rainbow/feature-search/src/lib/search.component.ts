import { Component, OnInit } from '@angular/core';
import { SearchFacade } from '@nx-lab/rainbow/domain';

@Component({
  selector: 'rainbow-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  emmaList$ = this.searchFacade.emmaList$;

  constructor(private searchFacade: SearchFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.searchFacade.load();
  }
}
