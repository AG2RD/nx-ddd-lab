import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RainbowUiDumbracModule } from '@nx-lab/rainbow/api';
import { RainbowFeatureSearchModule } from '@nx-lab/rainbow/feature-search';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(),
    RainbowFeatureSearchModule,
    HttpClientModule,
    RainbowUiDumbracModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
