import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ToastrService } from 'ngx-toastr';

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

  constructor(
    private service: ServiceService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  onSubmit() {
    const signinData = {
      name: this.username,
      email: this.email,
      password: this.password
    };

    this.service.addSignin(signinData).subscribe({
      next: (response) => {
        console.log('Signin successful', response);
        this.toastr.success('Sign-in successful!', 'Success');
        // Redirect to login page after successful sign-up
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Signin failed', error);
        this.toastr.error('Sign-in failed. Please try again.', 'Error');
      }
    });
  }
}