import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  template: `<input [placeholder]="placeholder" type="text" class="form-control" (keyup.enter)="emitValue(txtInput.value)" #txtInput>`,
  styleUrl: './searchBox.component.css',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = ''

  @Output()
  public onValue = new EventEmitter<string>()

  emitValue(value: string): void {
    this.onValue.emit(value)
  }
 }
