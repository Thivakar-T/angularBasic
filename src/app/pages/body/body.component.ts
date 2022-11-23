import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
 @Input() collapsed=false;
 @Input() screenWidth=0
  constructor() { }

  ngOnInit(): void {
  }
  getBodayClass(){
    let styleClass='';
    if(this.collapsed&&this.screenWidth>768){
      styleClass='body-trimmed';
    }else if(this.collapsed&&this.screenWidth<=768&&this.screenWidth>0){
      styleClass='body-md-screen';
    }
    return styleClass;
  }
}
