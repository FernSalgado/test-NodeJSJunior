import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent{

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public formService:FormService) { }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close();
  }
  delete(){
    try{
      this.formService.delete(this.data);
    } catch (error) {
      console.log(error);
    }
    this.dialogRef.close();
  }
}
