import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { EbayComponent } from './ebay/ebay.component';
import { AmazonComponent } from './amazon/amazon.component';
import { StateService } from './shared/state.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    EbayComponent,
    AmazonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
