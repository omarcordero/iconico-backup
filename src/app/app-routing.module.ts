import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { HomeFourComponent } from './components/pages/home-four/home-four.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { BlogFullComponent } from './components/pages/blog-full/blog-full.component';
import { BlogGridComponent } from './components/pages/blog-grid/blog-grid.component';
import { BlogListComponent } from './components/pages/blog-list/blog-list.component';
import { BlogMasonaryComponent } from './components/pages/blog-masonary/blog-masonary.component';
import { BlogSingleComponent } from './components/pages/blog-single/blog-single.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CheckoutComponent } from './components/pages/checkout/checkout.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { LegalComponent } from './components/pages/legal/legal.component';
import { LocationsComponent } from './components/pages/locations/locations.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { MenuOneComponent } from './components/pages/menu-one/menu-one.component';
import { MenuTwoComponent } from './components/pages/menu-two/menu-two.component';
import { MenuItemOneComponent } from './components/pages/menu-item-one/menu-item-one.component';
import { MenuItemTwoComponent } from './components/pages/menu-item-two/menu-item-two.component';
import { ErrorComponent } from './components/pages/error/error.component';

import { HomeLayoutsComponent } from 'src/app/components/layouts/home-layouts/home-layouts.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutsComponent, children: [
      { path: 'inicio', component: HomeComponent },
      { path: 'sucursal', component: LocationsComponent },
      { path: 'carta', component: MenuOneComponent },
      { path: 'menu-v2', component: MenuItemTwoComponent},
      { path: 'carta/:menuId', component: MenuItemOneComponent },
      { path: 'cesta', component: CartComponent },
      { path: 'procesar-compra', component: CheckoutComponent },
      { path: 'iniciar-sesion', component: LoginComponent },
      { path: 'registrarse', component: RegisterComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
    ]
  },
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home-v2', component: HomeTwoComponent
  },
  {
    path: 'home-v3', component: HomeThreeComponent
  },
  {
    path: 'home-v4', component: HomeFourComponent
  },
  {
    path: 'about', component: AboutUsComponent
  },
  {
    path: 'blog-full', component: BlogFullComponent
  },
  {
    path: 'blog-grid', component: BlogGridComponent
  },
  {
    path: 'blog-list', component: BlogListComponent
  },
  {
    path: 'blog-masonary', component: BlogMasonaryComponent
  },
  {
    path: 'blog-single', component: BlogSingleComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'legal', component: LegalComponent
  },
  {
    path: 'locations', component: LocationsComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'menu', component: MenuOneComponent
  },
  {
    path: 'menu-v2', component: MenuTwoComponent
  },
  {
    path: 'menu-item-v2', component: MenuItemTwoComponent
  },
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
