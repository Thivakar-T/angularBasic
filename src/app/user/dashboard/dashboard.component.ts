import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  haveChange = false
  textChange(name: any) {
    if (name == "") {
      this.haveChange = false
    }
    else {
      this.haveChange = true
    }
  }
  can() {
    if (this.haveChange) {
      if (confirm("you have not change")) {
        return true
      }
      else {
        return false
      }
    }
    else {
      return true
    }
  }
}
