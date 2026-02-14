import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-hola-mundo',
  imports: [RouterOutlet],
  templateUrl: './hola-mundo.html',
  styleUrl: './hola-mundo.css',
})
export class HolaMundo {
  respuesta: string = '';
  constructor(private router: Router, private http: HttpClient, private cdr: ChangeDetectorRef) {}

  onIngresar(e: Event){
    this.router.navigate(['/dashboard']);
  }  
  
  async onContrasena(){
    this.http.get<any>('/api/hello').subscribe({
    next: (data) => {
      this.respuesta = data.message;
      this.cdr.detectChanges();
    },
    error: () => {
      this.respuesta = 'Error fetching data';
    }
  });
  }
}
