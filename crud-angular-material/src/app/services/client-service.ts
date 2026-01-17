import { Injectable } from '@angular/core';
import { Client } from '../components/register/client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  static REPO_CLIENTS = '_CLIENTS';

  constructor() {}

  save(client: Client) {
    const storage = this.getStorage();
    storage.push(client);

    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(storage));
  }

  getStorage(): Client[] {
    const clientsRepository = localStorage.getItem(ClientService.REPO_CLIENTS);
    if (clientsRepository) {
      const clients: Client[] = JSON.parse(clientsRepository);
      return clients;
    }

    const clients: Client[] = [];
    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(clients));
    return clients;
  }
}
