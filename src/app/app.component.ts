import { Component, computed, signal } from '@angular/core';
import { ListComponent } from './list/list.component';
import { SearchInputComponent } from './search-input/search-input.component';

@Component({
  selector: 'app-root',
  imports: [ListComponent, SearchInputComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'SignalBasicUse';

  users = signal(['Henrique', 'Nunes', 'de', 'Almeida']);

  search = signal('');
  searchLowerCase = computed(() => this.search().toLowerCase())
  filteredUsers = computed(() => {
    return this.users().filter(user => user.toLowerCase().includes(this.searchLowerCase()))
  })

  remove(user: string) {
    this.users.update(users => users.filter(u => u !== user));
  }
}
