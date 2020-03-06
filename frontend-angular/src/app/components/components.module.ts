import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { FormService } from '../services/form.service';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent,
    AddComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule
  ],
  providers: [
    FormService
  ]
})
export class ComponentsModule { }
