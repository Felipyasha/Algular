import { Routes } from '@angular/router';
import { Search } from "./components/search/search";
import { Register } from "./components/register/register";

export const routes: Routes = [
    { path: 'register', component: Register },
    { path: 'search', component: Search }
];
