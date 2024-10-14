import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet,
    RouterLink,
    FormsModule
  ],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private service: ServiceService) {}

  onSubmit() {
    const signinData = {
      name: this.username,
      email: this.email,
      password: this.password
    };

    this.service.addSignin(signinData).subscribe({
      next: (response) => {
        console.log('Signin successful', response);
      },
      error: (error) => {
        console.error('Signin failed', error);
      }
    });
  }
}