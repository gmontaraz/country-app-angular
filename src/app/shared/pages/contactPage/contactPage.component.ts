import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'shared-contact-page',
  imports: [],
  template: `<p>contactPage works!</p>`,
  styleUrl: './contactPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPageComponent { }
