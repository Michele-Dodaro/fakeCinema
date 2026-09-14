import { Routes } from '@angular/router';
import { FakeCinema } from './components/fake-cinema/fake-cinema';
import { FakeFilm } from './components/fake-film/fake-film';

export const routes: Routes = [
    { path: '', redirectTo: 'fake-cinema', pathMatch: 'full' },
    { path: 'fake-cinema', component: FakeCinema },
    { path: 'films/:id', component: FakeFilm }
];
