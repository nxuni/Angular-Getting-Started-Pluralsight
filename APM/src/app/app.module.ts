import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductlistComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from "./shared/convert-to-spaces.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductlistComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
