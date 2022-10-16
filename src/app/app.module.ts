import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ImageComponent,
    SpinnerComponent
  ],
  imports: [
    [BrowserModule,HttpClientModule,FormsModule],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
