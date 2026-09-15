import { Component, OnInit } from '@angular/core';
import { ApiCinema, Film } from '../../services/api-cinema';
import { signal } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-fake-cinema',
  imports: [RouterLink],
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
    submitReservation(dialog: HTMLDialogElement): void {
        dialog.showModal();
    }
  readonly isModalOpen = signal(false);
  readonly Location = 'Via Roma 123, Milano';
  readonly Contacts = 'Email: info@cinema.it | Tel: +39 02 1234 5678';
  
  openModal(): void {
    this.isModalOpen.set(true);
  }

  closeModal(): void {
    this.isModalOpen.set(false);
  }

  currentSlide = 0;
  readonly totalSlides = 3;

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
  }

  prevSlide(): void {
    this.currentSlide = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
  }
}