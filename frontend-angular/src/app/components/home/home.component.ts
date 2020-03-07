import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { FormService } from 'src/app/services/form.service';
import { Form } from 'src/app/models/form';
import {ModalComponent} from '../modal/modal.component';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public dataSource: MatTableDataSource<any>; 
  
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  private forms:Form[] = [];
  public displayedCols:String[] = 
  ['name',
  'email',
  'phone',
  'language',
  'country',
  'billingAddress',  
  'shippingAddress',
  'fuelCutOff', 
  'identifyDrivers',
  'trackers',
  'numberTrackers',
  'delete']; 

  constructor(
    private formService:FormService, 
    private snackBar:MatSnackBar,
    public router:Router,
    public dialog:MatDialog
    ) { }
  
  async ngOnInit() {
    this.forms = await this.getAll();
    this.dataSource = new MatTableDataSource<Form>(this.forms);
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items per page';
    this.paginator._intl.firstPageLabel = 'First page';
    this.paginator._intl.lastPageLabel = 'Last page';
    this.paginator._intl.nextPageLabel = 'Next page';
    this.paginator._intl.previousPageLabel = 'Previous page';
    this.paginator._intl.getRangeLabel = (page: number, pageSize: number, length: number) => {
      return ((page * pageSize) + 1) + ' - ' + ((page * pageSize) + pageSize) + ' of ' + length;
    };
  }


  getAll = async() =>{
    try {
      var response = await this.formService.get();
    } catch (error) {
      console.log(error);
    }
    return response;
  };

  deleteRow(row){
    let id = this.dataSource.data[row]._id;
    let dialogRef = this.dialog.open(ModalComponent, {
      width:'30%',
      data:id
    });
    dialogRef.afterClosed().subscribe(async result =>{
      this.dataSource.data = await this.getAll();
    })
  } 
  navigate(){
    this.router.navigateByUrl('add');
  }
}
