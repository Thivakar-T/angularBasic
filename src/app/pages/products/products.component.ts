import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray,FormControl ,AbstractControl} from '@angular/forms';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  form!: FormGroup;
  addObj:any={}
  amount=0;

  constructor(private fb: FormBuilder) {
    
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: [],
      totalAmount:[0],
      address: this.fb.array([
      ])
    })
  }
  calculateTotal(event:any,index:any){
    console.log(event.value)
    console.log(index)
    this.addObj.address=event.value;
    for (let i = 0; i < this.addObj.address.length; i++) {
      this.addObj.address[i].total = Number(this.addObj.address[i].street)+Number(this.addObj.address[i].city);
    }
    console.log(this.addObj)
    let docArrList = <FormArray>this.form.controls['address'];
      docArrList.controls = [];
      if(this.addObj.address.length > 0){
        for (let val of this.addObj.address) {
          docArrList.push(this.vendorPurchaseMaterialList());
        }
      }
    this.form.patchValue({ address: this.addObj.address });
    // this.calculateTotalAmount(event,index)
  }
  // calculateTotalAmount(event:any,index:any){
  //   this.addObj.address=event.value;
  //   console.log(this.addObj)
  //   for (let i = 0; i < this.addObj.address.length; i++) {
  //     console.log(this.addObj.address[i])
  //     this.amount+=this.addObj.address[i].total
  //   }
  //   this.addObj.totalAmount=this.amount
  //   console.log(this.addObj)
  // }
  vendorPurchaseMaterialList() {
    return this.fb.group({
      street: [0],
      city: [0],
      total: [0],
    });
  }
  get vendorWiseList(): FormArray {
    return (<FormArray>this.form.get('address')) as FormArray;
  }
  addItem() {
    let order = this.vendorPurchaseMaterialList();
    this.vendorWiseList.push(order);
    console.log(this.vendorWiseList.controls)

  }
  delete(index:any) {
    this.vendorWiseList.removeAt(index);
  }
  submit(){
    console.log(this.form.value)
    localStorage.setItem("value",JSON.stringify(this.form.value))
  }
  edit(){
    const editdata=JSON.parse(localStorage.getItem('value') || '{}');
    console.log(editdata)
    this.addObj=editdata;
    let docArrList = <FormArray>this.form.controls['address'];
      docArrList.controls = [];
      if(this.addObj.address.length > 0){
        for (let val of this.addObj.address) {
          docArrList.push(this.vendorPurchaseMaterialList());
        }
      }
    this.form.patchValue({ address: this.addObj.address });
  }
}