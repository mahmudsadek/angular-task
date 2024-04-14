import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductsComponent } from './components/products/products.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contact',component:ContactusComponent},
  {path:'products',component:ProductsComponent},
  {path:'product/:id',component:DetailsComponent},
  {path:"add",component:AddproductComponent},
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  {path:'**',component:NotfoundComponent}
];
