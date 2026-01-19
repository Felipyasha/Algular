import { Component, OnInit } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { Client } from './client';
import { ClientService } from '../../services/client-service';

@Component({
  selector: 'app-register',
  imports: [
    FlexLayoutModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask()],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  client: Client = Client.newClient();
  updating: boolean = false;

  constructor(
    private service: ClientService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParamMap.subscribe((query: any) => {
      const params = query['params'];
      const id = params['id'];

      if (id) {
        let clientFind = this.service.searchClientsForId(id);
        if (clientFind) {
          this.updating = true;
          this.client = clientFind;
        }
      }
    });
  }

  saveClient() {
    if (!this.updating) {
      this.service.save(this.client);
      this.client = Client.newClient();
    } else {
      this.service.updateClient(this.client);
      this.router.navigate(['/search']);
    }
  }

  clear() {
    this.client = Client.newClient();
  }
}
