import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JaganLibModule} from 'jagan-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JaganLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
