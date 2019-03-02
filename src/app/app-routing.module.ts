import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { HolidayComponent } from './holiday/holiday.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { DollarComponent } from './dollar/dollar.component';
import { FeaturedComponent } from './featured/featured.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';

import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';


export const routes: Routes         = [
  // routes for for the navigation bar.
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent},
  { path: '',  pathMatch: 'full', component: HomeComponent},
  { path: 'clearance', component: ClearanceComponent},
  { path: 'holiday', component: HolidayComponent},
  { path: 'whats-new', component: WhatsNewComponent},
  { path: 'dollar', component: DollarComponent},
  { path: 'featured', component: FeaturedComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'cart', component: CartComponent},

  { path: 'add', component: AddComponent},
  { path: 'update', component: UpdateComponent},
  { path: 'delete', component: DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
