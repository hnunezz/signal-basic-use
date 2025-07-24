import { Component, input, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  //?[search]
  //?[(search)]
  //?(searchChange)
  search = model<string>('');
}
