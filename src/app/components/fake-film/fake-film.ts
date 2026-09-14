import { Component, OnInit, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiCinema, Film, Screening } from '../../services/api-cinema';

@Component({
  selector: 'app-fake-film',
  imports: [FormsModule, DatePipe],
  templateUrl: './fake-film.html',
  styleUrl: './fake-film.css',
})
export class FakeFilm implements OnInit {
  film = signal<Film | null>(null);
  screenings = signal<Screening[]>([]);
  error = signal<string | null>(null);
  success = signal(false);
  email = '';
  name = '';
  surname = '';

  constructor(
    private apiCinema: ApiCinema,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getFilm(id);
    this.getScreenings(id);
  }

  getFilm(id: number): void {
    this.apiCinema.getFilm(id).subscribe(film => {
      this.film.set(film);
    });
  }

  getScreenings(id: number): void {
    this.apiCinema.getFilmScreenings(id).subscribe(screenings => {
      this.screenings.set(screenings);
    });
  }

  submitReservation(screening: Screening, dialog: HTMLDialogElement): void {
    this.error.set(null);
    this.apiCinema.createBooking(screening.id, {
      first_name: this.name,
      last_name: this.surname,
      email: this.email
    }).subscribe({
      next: () => {
        this.screenings.update(list =>
          list.map(s => (s.id === screening.id ? { ...s, available_seats: s.available_seats - 1 } : s))
        );
        this.success.set(true);
        dialog.close();
      },
      error: err => {
        console.error('Booking failed:', err);
        this.error.set('si è verificato un problema, riprova più tardi.');
      }
    });
    dialog.close();
  }

  closeResult(): void {
    this.error.set(null);
    this.success.set(false);
  }
}
