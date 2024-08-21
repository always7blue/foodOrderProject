import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { authGuard } from './auth/auth.guard';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { OrderTrackPageComponent } from './order-track-page/order-track-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'search/:searchTerm', component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  {path:'login', component: LoginPageComponent},
  {path:'register', component: RegisterPageComponent},
  {path:'checkout', component: CheckoutPageComponent, canActivate:[authGuard]},
  {path:'payment', component: PaymentPageComponent, canActivate:[authGuard]},
  {path:'track/:orderId', component: OrderTrackPageComponent, canActivate:[authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }