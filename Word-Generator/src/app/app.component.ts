import { Component } from '@angular/core';
import arrayWords from '../utils/words';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Word-Generator';

  words = '';
  limit =10;

  handleSlideChange(newLimit : number){
    this.limit = newLimit;
  }
  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }
}
