import { Component, computed, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
})
export class ListComponent {
  //Input
  users = input.required<string[]>();
  //Output
  removeUserChange = output<string>({ alias: 'remove' });

  handleRemove(user: string) {
    this.removeUserChange.emit(user);
  }
}
