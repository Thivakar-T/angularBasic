import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navData } from './nav';
import{trigger,transition,style,animation,animate,keyframes} from '@angular/animations'

interface SidenavTogle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations:[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:0}),
        )
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0}),
        )
      ])
    ]),
    trigger('rotate',[
      transition(':enter',[
        style({opacity:0}),
        animate('1000ms',
        keyframes([
          style({transform:'rotate(0deg)',offset:'0'}), 
          style({transform:'rotate(2turn)',offset:'1'}),
        ])
        )
      ]),
    ])
  ]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SidenavTogle> = new EventEmitter()
  collapsed = false;
  screenWidth = 0;
  navData = navData;
  constructor() { }
  
  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth<=767){
      this.collapsed = false;
      this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })  
    }
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }
  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })

  }
}
