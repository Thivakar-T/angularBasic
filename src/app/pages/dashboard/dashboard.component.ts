import { Component, OnInit } from '@angular/core';
interface SidenavTogle{
  screenWidth:number;
  collapsed:boolean;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isSideNavCollapsed=false;
  screenWidth=0;
  constructor() { }

  ngOnInit(): void {
  }
  onToggleSideNav(data:SidenavTogle){
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed
  }
}
