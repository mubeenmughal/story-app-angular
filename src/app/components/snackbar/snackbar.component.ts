import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  template: `<span>{{ message }}</span>`,
})
export class SnackbarComponent {
  @Input() public message: any;
}
