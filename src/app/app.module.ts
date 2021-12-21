import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { TwoWayDemoComponent } from './two-way-demo/two-way-demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClassStyleBindingComponent } from './class-style-binding/class-style-binding.component';
import { BankComponent } from './bank/bank.component';
import { DirectiveIfComponent } from './directive-if/directive-if.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { ForDirectiveDemo2Component } from './for-directive-demo2/for-directive-demo2.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CustPipePipe } from './PipeDemoComponent/cust-pipe.pipe';
import { MyPipePipe } from './my-pipe.pipe';
import { TempConvertPipe } from './temp-convert.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveFormGroupComponent } from './reactive-form-group/reactive-form-group.component';
import { CubeServDemoComponent } from './cube-serv-demo/cube-serv-demo.component';
import { GlobleservDemoComponent } from './globleserv-demo/globleserv-demo.component';
import { ServiceGlobleDemoService } from './service-globle-demo.service';
import { EmployeeComponent } from './employee/employee.component';
import { ServEmployeeService } from './serv-employee.service';
import { CrudOperationComponent } from './crud-operation/crud-operation.component';
import { HttpClientModule } from '@angular/common/http';
import { MyHttpClientComponent } from './my-http-client/my-http-client.component';
import { MyHttpComponent } from './my-http/my-http.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { MyJSONDataComponent } from './my-jsondata/my-jsondata.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    AttributeDemoComponent,
    TwoWayDemoComponent,
    ClassStyleBindingComponent,
    BankComponent,
    DirectiveIfComponent,
    ForDirectiveComponent,
    ForDirectiveDemo2Component,
    PipeDemoComponent,
    CustPipePipe,
    MyPipePipe,
    TempConvertPipe,
    LifeCycleComponent,
    FormDemoComponent,
    ReactiveComponent,
    ReactiveFormGroupComponent,
    CubeServDemoComponent,
    GlobleservDemoComponent,
    EmployeeComponent,
    CrudOperationComponent,
    MyHttpClientComponent,
    MyHttpComponent,
    HttpClientDemoComponent,
    MyJSONDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [ServiceGlobleDemoService,ServEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
