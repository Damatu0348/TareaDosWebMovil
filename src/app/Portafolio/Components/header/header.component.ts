import { Component } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'header',
  imports: [ContactFormComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
