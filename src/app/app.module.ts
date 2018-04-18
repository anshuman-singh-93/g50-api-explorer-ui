import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule,} from '@angular/core';


import { AppComponent } from './app.component';
import {ToastService} from "./services/toast.service";
import {ToastyModule} from "ng2-toasty";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorService} from "./services/interceptor.service";
import {LogService} from "./services/logger/log.service";
import {LogPublisherService} from "./services/logger/log-publisher.service";
import {AppErrorHandlerService} from "./services/app-error-handler.service";
import {ThinaerService} from "./thinaer.service";
import {LandingComponent} from "./landing/landing.component";
import {DevicesComponent} from "./devices/devices.component";
import {AppRoutingModule} from "./app.routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastyModule.forRoot()
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    LogService,
    LogPublisherService,
    {provide:ErrorHandler,useClass:AppErrorHandlerService},
    ToastService,
    ThinaerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
