import { Routes } from '@angular/router';
import { Consultation } from "./components/consultation/consultation";
import { Register } from "./components/register/register";

export const routes: Routes = [
    { path: 'register', component: Register },
    { path: 'consult', component: Consultation }
];
