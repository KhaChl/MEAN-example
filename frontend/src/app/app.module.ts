import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
/* servicio interceptor */
import { TokenInterceptorService } from './shared/services/token-interceptor.service';
/* modulos */
import { IndexModule } from './views/base/index/index.module';
import { UserModule } from './views/pages/user/user.module';
import { ManagementModule } from './views/pages/management/management.module';
import { ProductModule } from './views/pages/product/product.module';
import { PageNotFoundComponent } from './views/pages/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IndexModule,
    UserModule,
    ManagementModule,
    ProductModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
