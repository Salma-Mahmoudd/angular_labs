import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomDirective } from './directives/custom.directive';
import { CommonModule } from '@angular/common';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CustomDirective,
    CommonModule,
    CustomPipe,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-labs';
}
