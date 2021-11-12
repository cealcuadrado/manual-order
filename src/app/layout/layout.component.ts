import { Movie } from './../shared/interfaces/movie';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  rawMovies: Movie[] = [
    { id: 1, title: "Duel", year: 1971 },
    { id: 2, title: "The Sugarland Express", year: 1974 },
    { id: 3, title: "Jaws", year: 1975 },
    { id: 4, title: "Close Encounters of the Third Kind", year: 1977 },
    { id: 5, title: "1941", year: 1979 },
    { id: 6, title: "Raiders of the Lost Ark", year: 1981 },
    { id: 7, title: "E.T.: The Extraterrestrial", year: 1982 },
    { id: 8, title: "The Temple of Doom", year: 1984 },
    { id: 9, title: "The Color Purple", year: 1985 },
    { id: 10, title: "Empire of the Sun", year: 1987 },
  ];

  currentMovies: Movie[] = [];

  options: any = [
    { name: "Default", value: "default" },
    { name: "ID (increasing)", value: "idIncreasing" },
    { name: "ID (decreasing)", value: "idDecreasing" },
    { name: "Title (A-Z)", value: "titleAZ" },
    { name: "Title (Z-A)", value: "titleZA" },
    { name: "Year (increasing)", value: "yearIncreasing" },
    { name: "Year (decreasing)", value: "yearDecreasing" },
  ];

  optionSelected: string;

  constructor() {}

  ngOnInit() {
    this.currentMovies = this.rawMovies;
    this.optionSelected = this.options[0].value;
  }

  resetList(): void {
    this.currentMovies = this.rawMovies;
  }

  onChange(): void {
    console.log(this.optionSelected);
    switch (this.optionSelected) {
      case "default": {
        this.resetList();
        break;
      }
      case "idIncreasing": {
        this.currentMovies.sort(this.currentMoviesIdIncreasing);
        break;
      }
      case "idDecreasing": {
        this.currentMovies.sort(this.currentMoviesIdDecreasing);
        break;
      }
    }
  }

  currentMoviesIdIncreasing(a, b): number {
    const idA = a.id;
    const idB = b.id;
    return idA - idB;
  }

  currentMoviesIdDecreasing(a, b): number {
    const idA = a.id;
    const idB = b.id;
    return idB - idA;
  }
}
