import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing-module';
import { Layout } from './layout/layout';
import { CategoriesModule } from '../categories/categories-module';


@NgModule({
  declarations: [
    Layout
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CategoriesModule
  ]
})
export class TemplateModule { }
