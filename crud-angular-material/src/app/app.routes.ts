import { Routes } from '@angular/router';
import { Consultation } from "./consultation/consultation";
import { Register } from "./register/register";

export const routes: Routes = [
    { path: 'register', component: Register },
    { path: 'consult', component: Consultation }
];
