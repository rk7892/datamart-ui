import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceService } from '../service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private service: ServiceService, private router: Router) {}

  onLogin() {
    const loginData = { email: this.email, password: this.password };

    this.service.login(loginData).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Navigate to dashboard upon successful login
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid login credentials');
      }
    });
  }
}
