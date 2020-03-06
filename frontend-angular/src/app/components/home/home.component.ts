import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dataSource: MatTableDataSource<Form>; 
  private forms:Form[] = [];
  public displayedCols:String[] = 
  ['firstName',
  'lastName',
  'email',
  'phone',
  'language',
  'country',
  'firstBillingAddress', 
  'secondBillingAddress', 
  'billingCity', 
  'billingState',
  'billingZipCode', 
  'firstShippingAddress', 
  'secondShippingAddress', 
  'shippingCity', 
  'shippingState', 
  'shippingZipCode',
  'fuelCutOff', 
  'identifyDrivers',
  'trackers',
  'numberTrackers']; 

  constructor(private formService:FormService) { }
  
  async ngOnInit() {
    this.forms = await this.getAll();
    this.dataSource = new MatTableDataSource<Form>(this.forms);
  }


  getAll = async() =>{
    try {
      var response = await this.formService.get();
    } catch (error) {
      console.log(error);
    }
    return response;
  };
}
