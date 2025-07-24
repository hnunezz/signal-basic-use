import { Component, computed, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { ListComponent } from './list/list.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { Users } from './users';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { take } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [SearchInputComponent, ListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private usersService = inject(Users);
  private detroyRef = inject(DestroyRef);

  title = 'SignalBasicUse';

  users = signal<string[]>([]);
  loading = signal(true);
  search = signal('');

  searchLowerCase = computed(() => this.search().toLowerCase())
  filteredUsers = computed(() => {
    return this.users().filter(user => user.toLowerCase().includes(this.searchLowerCase()))
  })

  ngOnInit(): void {
    this.getAll();
  }

  remove(user: string) {
    this.users.update(users => users.filter(u => u !== user));
  }

  private getAll() {
    this.usersService.getAll()
      .pipe(takeUntilDestroyed(this.detroyRef), take(1))
      .subscribe((users: string[]) => {
        this.users.set(users);
        this.loading.set(false);
      })
  }
}
