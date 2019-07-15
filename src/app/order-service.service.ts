import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  coffeeCategories
  getCoffeeList() {
    this.coffeeCategories=[
      {pic: "assets\different-coffees\edited-sizes\Cuppacino2.jpg", description: "Cuppacino", price: "23.00"},
      {pic: "assets\different-coffees\edited-sizes\Latte-cup.jpg", description: "Latte", price: "25.00"},
      {pic: "assets\different-coffees\edited-sizes\espresso.jpg", description: "Espresso", price: "21.00"},
      {pic: "assets\different-coffees\edited-sizes\plain-coffee.jpg", description: "Plain Coffee", price: "18.00"}
    ]
    return this.coffeeCategories
  }
  constructor() { }
}
