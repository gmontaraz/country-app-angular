import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-about-page',
  imports: [],
  template: `<p>aboutPage works!</p>`,
  styleUrl: './aboutPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
