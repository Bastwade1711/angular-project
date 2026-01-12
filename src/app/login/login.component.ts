import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = signal('');
  password = signal('');
  errorMessage = signal('');

  constructor(private router: Router) {}

  onSubmit() {
    // Basic validation
    if (!this.email() || !this.password()) {
      this.errorMessage.set('Please enter both email and password');
      return;
    }

    // Add your authentication logic here
    console.log('Login attempt:', { email: this.email(), password: this.password() });
    
    // Example: navigate after successful login
    // this.router.navigate(['/dashboard']);
  }
}
