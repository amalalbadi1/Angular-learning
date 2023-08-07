import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestmonialComponent } from './testmonial/testmonial.component';
import { BlogComponent } from './blog/blog.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  {path:"nav",component:NavComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"service",component:ServiceComponent},
  {path:"portfolio",component:PortfolioComponent},
  {path:"testmonial",component:TestmonialComponent},
  {path:"blog",component:BlogComponent},
  {path:"footer",component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
