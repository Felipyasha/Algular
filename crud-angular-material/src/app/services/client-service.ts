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

  searchClients(nameSerach: string): Client[] {
    const clients = this.getStorage();

    if (!nameSerach) {
      return clients;
    }

    return clients.filter((client) => client.name?.indexOf(nameSerach) !== -1);
  }

  searchClientsForId(id: string): Client | undefined{
    const clients = this.getStorage();
    
    return clients.find(client => client.id === id);
  }

  updateClient(client : Client){
    const storage = this.getStorage();

    storage.forEach(c => {
      if (c.id === client.id) {
        Object.assign(c,client)
      }
    })
    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(storage));
  }

  deleteClient(client : Client){
    const storage = this.getStorage();

    const newList = storage.filter(c => c.id !== client.id);

    localStorage.setItem(ClientService.REPO_CLIENTS, JSON.stringify(newList));
  }

  private getStorage(): Client[] {
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
