import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule} from '@angular/forms';
import { TagsComponent } from './tags/tags.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ToastrModule } from 'ngx-toastr';
import { DefaultButtonComponent } from './default-button/default-button.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, provideHttpClient, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { TitleComponent } from './title/title.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { InputValidationComponent } from './input-validation/input-validation.component';
import { TextInputComponent } from './text-input/text-input.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './order-items-list/order-items-list.component';
import { MapComponent } from './map/map.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    CartPageComponent,
    NotFoundComponent,
    DefaultButtonComponent,
    LoginPageComponent,
    TitleComponent,
    InputContainerComponent,
    InputValidationComponent,
    TextInputComponent,
    RegisterPageComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
    OrderTrackPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })
  ],
  providers: [
    provideHttpClient(),
    { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi: true}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
