import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  animate = false;
  loading = false;

  constructor(private router: Router) {}

  goToBio() {
    this.animate = true;
    this.loading = true;

    setTimeout(() => {
      this.router.navigate(['/bio']);
    }, 1200);
  }
}
