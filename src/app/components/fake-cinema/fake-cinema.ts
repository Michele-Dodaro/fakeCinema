import { Component, OnInit } from '@angular/core';
import { ApiCinema, Film } from '../../services/api-cinema';
import { signal } from '@angular/core';
@Component({
  selector: 'app-fake-cinema',
  templateUrl: './fake-cinema.html',
  styleUrls: ['./fake-cinema.css']
})
export class FakeCinema implements OnInit {
  films = signal<Film[]>([]);

  constructor(private apiCinema: ApiCinema) {}

  ngOnInit(): void {
    this.getFilms();
  }

  getFilms(): void {
    this.apiCinema.getFilms().subscribe(films => {
      this.films.set(films);
    });
    console.log(this.films());
  }
} 
