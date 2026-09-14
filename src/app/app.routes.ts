import { Routes } from '@angular/router';
import { FakeCinema } from './components/fake-cinema/fake-cinema';

export const routes: Routes = [
    { path: '', redirectTo: 'fake-cinema', pathMatch: 'full' },
    { path: 'fake-cinema', component: FakeCinema }
];
