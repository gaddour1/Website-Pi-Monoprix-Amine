import { Component } from '@angular/core';
import { Router } from '@angular/router';

// Permet d'utiliser jQuery
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log("Tentative de connexion");

    // Fermer le modal si ouvert
    $('#myModal').modal('hide');

    if (this.email === 'daf@daf.tn' && this.password === 'daf123') {
      console.log("Redirection vers FinancialComponent");
      setTimeout(() => {
        this.router.navigate(['/financial']);
      }, 300); // délai pour que le modal ait le temps de se fermer
    } 
    else if (this.email === 'supplier' && this.password === 'supplier123') {
      console.log("Redirection vers SupplierFinancialComponent");
      setTimeout(() => {
        this.router.navigate(['/SupplierFinancial']);
      }, 300);
    }
    else if (this.email && this.password) {
      console.log("Redirection vers Dashboard");
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 300);
    } 
    else {
      alert('Veuillez remplir tous les champs');
    }
  }
}
