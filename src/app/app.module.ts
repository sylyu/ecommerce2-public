import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';


// dependencies
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule} from 'ngx-bootstrap/carousel';
import { CurrencyMaskModule } from "ng2-currency-mask";

// app router pages
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';

// pages
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { ClearanceComponent } from './clearance/clearance.component';
import { HolidayComponent } from './holiday/holiday.component';
import { WhatsNewComponent } from './whats-new/whats-new.component';
import { DollarComponent } from './dollar/dollar.component';
import { FeaturedComponent } from './featured/featured.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';

// Administrative Tasks
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    // Administrative pages
    AddComponent,
    EditComponent,
    ViewComponent,

    // pages to navigate to 
    NavbarComponent,
    AppComponent,
    FooterComponent,
    Footer2Component, 

    HomeComponent,
    CategoriesComponent,
    ClearanceComponent,
    HolidayComponent,
    WhatsNewComponent,
    DollarComponent,
    FeaturedComponent,
    SignInComponent,
    CartComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CurrencyMaskModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
