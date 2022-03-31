import { JokesService } from './../../services/jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  jokeText: string = '';
  jokeArray: string[] = [];
  jokeTextBox: string = '';
  jokeCategories: any = 'Any';

  constructor(private JokesService: JokesService) {}

  ngOnInit(): void {}

  getJokeCategories(data: string) {
    this.jokeCategories = data;
  }

  getJoke() {
    this.jokeText = '';
    this.JokesService.getJokeFromServer(this.jokeCategories, this.jokeTextBox).subscribe((response) => {
      if (response.error == true) {
        this.jokeArray.unshift('No joke found...');
      } else {
        if (response.type == 'single' && response.joke) {
          this.jokeText = response.joke;
        } else if (response.type == 'twopart' && response.delivery && response.setup) {
          this.jokeText = response.setup + '  ' + response.delivery;
        }
        this.jokeArray.unshift(this.jokeText);
        this.jokeArray.splice(2, 1);
      }
    });
  }
}
