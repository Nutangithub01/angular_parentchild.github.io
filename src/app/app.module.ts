import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildReusableComponent } from './child-reusable/child-reusable.component';
import { ChildDataTransferComponent } from './child-data-transfer/child-data-transfer.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildReusableComponent,
    ChildDataTransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
