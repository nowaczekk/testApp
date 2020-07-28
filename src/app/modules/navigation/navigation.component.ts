import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-nav',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor(private router: Router) { }
 
  ngOnInit() {
  }
 
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
 
}