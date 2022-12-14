import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FrameComponent } from '../../reusables/frame/frame.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FrameComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
