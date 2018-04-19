import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { FirstlibModule } from '@nrwlnx-research/firstlib';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    FirstlibModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
