import { Injectable } from '@angular/core';
import { Client } from '../components/register/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

  save(client: Client){
    console.log("Client data: ", client);
  }
}
