import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public buttons = [
    { name: 'Home' ,position: 'left', link : '/'},
    { name: 'About',position: 'middle', link : '/about'},
    { name: 'Contact',position: 'right', link : '/contact'}
  ]
  constructor() {
  }

  triggerMenu: boolean = false;

  ngOnInit(): void {
  }


  handleMenuTrigger(): void {
    this.triggerMenu = !this.triggerMenu;
    if (this.triggerMenu) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    }
  }

  onNavItemClick(): void {
    this.triggerMenu = false;
    document.body.style.overflow = 'auto'
    document.documentElement.style.overflow = 'auto'
  }

}
