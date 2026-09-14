import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Film {
  id: number;
  title: string;
  genre: string;
  duration: number;
  director: string;
  description: string;
  poster_url: string;
  year: number;
  rating: string;
}

export interface Hall {
  id: number;
  name: string;
  capacity: number;
}

export interface Screening {
  id: number;
  starts_at: string;
  film: Pick<Film, 'id' | 'title' | 'genre' | 'duration' | 'poster_url'>;
  hall: Hall;
  available_seats: number;
}

export interface BookingRequest {
  first_name: string;
  last_name: string;
  email: string;
}

export interface Booking {
  id: number;
  screening_id: number;
  first_name: string;
  last_name: string;
  email: string;
  created_at: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiCinema {
  private readonly baseUrl = 'https://its-cinema.vercel.app/api';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films`);
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(`${this.baseUrl}/films/${id}`);
  }

  getFilmScreenings(id: number): Observable<Screening[]> {
    return this.http.get<Screening[]>(`${this.baseUrl}/films/${id}/screenings`);
  }

  getScreenings(): Observable<Screening[]> {
    return this.http.get<Screening[]>(`${this.baseUrl}/screenings`);
  }

  getScreening(id: number): Observable<Screening> {
    return this.http.get<Screening>(`${this.baseUrl}/screenings/${id}`);
  }

  createBooking(screeningId: number, booking: BookingRequest): Observable<Booking> {
    return this.http.post<Booking>(`${this.baseUrl}/screenings/${screeningId}/bookings`, booking);
  }
}
