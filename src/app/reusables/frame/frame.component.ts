import { Component, Input, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss'],
})
export class FrameComponent {
  @Input()
  footerTemplate: TemplateRef<any> | undefined;
}
