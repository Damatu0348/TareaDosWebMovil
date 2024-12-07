import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './Portafolio/Components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tareaDosWeb';

  ngOnInit(): void{
    initFlowbite();
  }
}
