import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class ProductsModule {}
