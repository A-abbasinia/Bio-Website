import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-bio',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './bio.html',
  styleUrl: './bio.css',
})
export class Bio implements OnInit {
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  }
}
