import { Movie } from './../shared/interfaces/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  rawMovies: Movie[] = [
    { id: 1, title: 'Duel', year: 1971 },
    { id: 2, title: 'The Sugarland Express', year: 1974 },
    { id: 3, title: 'Jaws', year: 1975 },
    { id: 4, title: 'Close Encounters of the Third Kind', year: 1977 },
    { id: 5, title: '1941', year: 1979 },
    { id: 6, title: 'Raiders of the Lost Ark', year: 1981 },
    { id: 7, title: 'E.T.: The Extraterrestrial', year: 1982 },
    { id: 8, title: 'The Temple of Doom', year: 1984 },
    { id: 9, title: 'The Color Purple', year: 1985 },
    { id: 10, title: 'Empire of the Sun', year: 1987}
  ];

  currentMovies: Movie[] = [];

  constructor() { }

  ngOnInit() {
    this.currentMovies = this.rawMovies;
  }

}
