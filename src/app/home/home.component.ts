import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, private route:ActivatedRoute){ }

ngOnInit(): void {
 // Yönlendirme parametrelerini dinleyin
 this.route.params.subscribe(params => {
  // Eğer searchTerm parametresi varsa
  if (params.searchTerm) 
    // foodService'den tüm yiyecekleri alır ve searchTerm'e göre filtreler
    this.foods = this.foodService.getAllFoodsBySearchTerm(params.
      searchTerm);
   else if(params.tag)
    this.foods = this.foodService.getAllFoodsByTag(params.tag)
   else 
    // searchTerm parametresi yoksa, tüm yiyecekleri alır
    this.foods = this.foodService.getAll();
  })  
  }
}
