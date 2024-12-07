import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './Portafolio/Components/header/header.component';
import { LaboralExperienceComponent } from './Portafolio/Components/laboral-experience/laboral-experience.component';
import { PersonalDescriptionComponent } from './Portafolio/Components/personal-description/personal-description.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LaboralExperienceComponent, PersonalDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tareaDosWeb';

  ngOnInit(): void{
    initFlowbite();
  }
}
