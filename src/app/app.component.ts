import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'; // Import MatToolbarModule directly
import { MatIconModule } from '@angular/material/icon';     // Import MatIconModule directly

@Component({
  selector: 'app-root',
  standalone: true, // Check if this is true
  imports: [
    RouterOutlet,
    MatToolbarModule, // Add MatToolbarModule here if standalone
    MatIconModule,    // Add MatIconModule here if standalone
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'blog-web';
}