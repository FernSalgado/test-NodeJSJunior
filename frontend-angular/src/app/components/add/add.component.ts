import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms';
import {MatCheckbox} from '@angular/material/checkbox'
import { Form } from 'src/app/models/form';
import { FormService } from 'src/app/services/form.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  get firstName(): FormControl { return this.formAdd.get('firstName') as FormControl; }
  get lastName(): FormControl { return this.formAdd.get('lastName') as FormControl; }
  get phone(): FormControl { return this.formAdd.get('phone') as FormControl; }
  get email(): FormControl { return this.formAdd.get('email') as FormControl; }
  get language(): FormControl { return this.formAdd.get('language') as FormControl; }
  get country(): FormControl { return this.formAdd.get('country') as FormControl; }
  get firstBillingAddress(): FormControl { return this.formAdd.get('firstBillingAddress') as FormControl; }
  get secondBillingAddress(): FormControl { return this.formAdd.get('secondBillingAddress') as FormControl; }
  get billingCity(): FormControl { return this.formAdd.get('billingCity') as FormControl; }
  get billingState(): FormControl { return this.formAdd.get('billingState') as FormControl; }
  get billingZipCode(): FormControl { return this.formAdd.get('billingZipCode') as FormControl; }
  get firstShippingAddress(): FormControl { return this.formAdd.get('firstShippingAddress') as FormControl; }
  get secondShippingAddress(): FormControl { return this.formAdd.get('secondShippingAddress') as FormControl; }
  get shippingCity(): FormControl { return this.formAdd.get('shippingCity') as FormControl; }
  get shippingState(): FormControl { return this.formAdd.get('shippingState') as FormControl; }
  get shippingZipCode(): FormControl { return this.formAdd.get('shippingZipCode') as FormControl; }
  
  public done:boolean = false;
  public checked:boolean = false;
  public formAdd: FormGroup;

  constructor(private formBuilder: FormBuilder, private formService:FormService, private snackBar:MatSnackBar, private router:Router) {
   }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(){
    let regexp = '[\\D][^!\\"#$%&\'()`*+,\\-./:;<=>?@[\\]^_{|}~]*$';
    this.formAdd = this.formBuilder.group({
      firstName:new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern(regexp)]),
      lastName:new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern(regexp)]),
      email:new FormControl('', [Validators.required,Validators.email]),
      phone:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[0-9]*$')]),
      language:new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern(regexp)]),
      country:new FormControl('',[Validators.required,Validators.minLength(2), Validators.pattern(regexp)]),
      firstBillingAddress:new FormControl('',[Validators.required,Validators.minLength(2)]),
      secondBillingAddress:new FormControl('',[Validators.required,Validators.minLength(2)]),
      billingCity:new FormControl('',[Validators.required,Validators.minLength(2)]),
      billingState:new FormControl('',[Validators.required,Validators.minLength(2)]),
      billingZipCode:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]*$')]),      
      firstShippingAddress:new FormControl('',[Validators.required,Validators.minLength(2)]),
      secondShippingAddress:new FormControl('',[Validators.required,Validators.minLength(2)]),
      shippingCity:new FormControl('',[Validators.required,Validators.minLength(2)]),
      shippingState:new FormControl('',[Validators.required,Validators.minLength(2)]),
      shippingZipCode:new FormControl('',[Validators.required,Validators.minLength(2),Validators.pattern('^[0-9]*$')]),
      fuelCutOff: false,
      identifyDrivers:false,
      trackers:false,
      numberTrackers:0
    });
  }
  billingIsShipping(){
    let controls = this.formAdd.controls;
    if(this.checked){
      controls['firstShippingAddress'].disable();
      controls['secondShippingAddress'].disable();
      controls['shippingCity'].disable();
      controls['shippingState'].disable();
      controls['shippingZipCode'].disable();
    }else {
      controls['firstShippingAddress'].enable();
      controls['secondShippingAddress'].enable();
      controls['shippingCity'].enable();
      controls['shippingState'].enable();
      controls['shippingZipCode'].enable();
    }
  }
  async submitForm(){
    let form = this.formAdd;
    if(form.valid){
      this.done = true;
      let model:Form = new Form();
      Object.keys(form.value).forEach(key => {
        model[key] = form.controls[key].value;
      })
      if (this.checked){
        model.firstShippingAddress = model.firstBillingAddress;
        model.secondShippingAddress = model.secondBillingAddress;
        model.shippingCity = model.billingCity;
        model.shippingState = model.billingState;
        model.shippingZipCode = model.billingZipCode;
      }
      try{
        this.formService.post(model);
      } catch(error) {
        console.log(error.error);
        this.done = false;
        return error;
      }
      let refSnackBar = this.snackBar.open('Thank you for your order!','',{
        duration:3000,
      });
      refSnackBar.afterDismissed().subscribe(() =>{
        this.navigate();
      })
    }
  }
  navigate(){
    this.router.navigateByUrl('home');
  }
}
