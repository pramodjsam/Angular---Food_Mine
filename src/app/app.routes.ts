import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"search/:searchTerm",
        component: HomeComponent
    },
    {
        path:"tags/:tag",
        component: HomeComponent
    },
    {
        path:"food/:foodId",
        component: FoodPageComponent
    },
    {
        path:"cart-page",
        component: CartPageComponent
    }
];
