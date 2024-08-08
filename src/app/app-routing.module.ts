import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
// Uygulamanızın yönlendirme (routing) yapılandırmasını tanımlayın
const routes: Routes = [
  // Boş ('') yolun, HomeComponent bileşenini göstereceğini belirtir
  { path: '', component: HomeComponent },
  // 'search/:searchTerm' yolun, HomeComponent bileşenini göstereceğini ve searchTerm parametresini alacağını belirtir
  { path: 'search/:searchTerm', component: HomeComponent },

  { path: 'tag/:tag', component: HomeComponent},

  { path: 'food/:id', component: FoodPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
