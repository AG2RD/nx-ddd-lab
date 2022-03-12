import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RainbowDomainModule } from '@nx-lab/rainbow/domain';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [CommonModule, RainbowDomainModule],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class RainbowFeatureSearchModule {}
