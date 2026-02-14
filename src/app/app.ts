import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HolaMundo } from '../app/hola-mundo/hola-mundo';
import { Dashboard } from './dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HolaMundo, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularTest');
}
