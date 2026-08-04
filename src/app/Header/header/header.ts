import { Component, HostListener } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [NgClass, NgIf, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  isMenuOpen = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(){
    this.isScrolled = window.scrollY > 50
  }
}
