import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Root shell: every page is rendered through the router (see app.routes.ts),
// so the root component only needs RouterOutlet.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
