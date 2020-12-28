import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Counter-App';

  count: number = 0;

  handleIncrease = () => {
    if(this.count === 10) {
      this.count = this.count+0;
    }
    else{
      this.count = this.count + 1;
    }
  };

  handleDecrease = () => {
    if(this.count === 0){
      this.count = this.count-0;
    }
    else{
      this.count = this.count-1;
    }
  };

  handleReset = () => {
    this.count = 0;
  };
}
