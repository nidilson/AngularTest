import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-hola-mundo',
  imports: [RouterOutlet],
  templateUrl: './hola-mundo.html',
  styleUrl: './hola-mundo.css',
})
export class HolaMundo {
  constructor(private router: Router) {}

  onIngresar(e: Event){
    this.router.navigate(['/dashboard']);
  }  
}

