import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  email: string = '';
  message: string = '';
  isSending: boolean = false;

  submitForm() {
    if (!this.email || !this.message) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Mostrar indicador "Enviando..."
    this.isSending = true;

    // Simular envío del formulario
    setTimeout(() => 
      {
        this.isSending = false;
        alert('Formulario enviado correctamente');
        
        // Reiniciar los campos (tiempo de espera: 2 segundos)
        this.email = '';
        this.message = '';
      }, 
      2000); 
  }
}
