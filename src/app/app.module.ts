import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { FormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { BankComponent } from './bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    AttributeDemoComponent,
    TwoWayDemoComponent,
    ClassStyleBindingComponent,
    BankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
