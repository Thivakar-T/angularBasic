import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MasterService } from 'src/app/service/master.service';
@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  loginForm!:FormGroup

  constructor(
    private MasterService:MasterService,
    private fb:FormBuilder
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }
  onSubmit(){
    console.log(this.loginForm.value)
    this.MasterService.bed(this.loginForm.value).subscribe(res => {
  });
  }
}
