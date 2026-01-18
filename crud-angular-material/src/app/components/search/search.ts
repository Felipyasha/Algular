import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ClientService } from '../../services/client-service';
import { Client } from '../register/client';


@Component({
  selector: 'app-search',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search implements OnInit {
  nameSearch: string = '';

  clientsList: Client[] = [];
  colunmsTable: string[] = ['id', 'name', 'ssn', 'birthday', 'email', 'actions'];

  constructor(
    private service: ClientService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.clientsList = this.service.searchClients('');
  }

  search() {
    this.clientsList = this.service.searchClients(this.nameSearch);
  }

  sendToEdit(id: string) {
    this.router.navigate(['/register'], {queryParams: {"id": id}})
  }

  sendToDelete(client: Client){
    client.deleting = true;
  }

  delete(client : Client){
    this.service.deleteClient(client);
    this.clientsList = this.service.searchClients('');
  }
}
