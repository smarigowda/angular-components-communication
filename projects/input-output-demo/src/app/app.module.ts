import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderProcessorComponent } from './order-processor/order-processor.component';
import { PriceQuoterComponent } from './price-quoter/price-quoter.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderProcessorComponent,
    PriceQuoterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
