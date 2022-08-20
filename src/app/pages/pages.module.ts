import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from './home/home.component';
import { SharedModule } from "../shared/shared.module";
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,

  ]
})
export class PagesModule { }
