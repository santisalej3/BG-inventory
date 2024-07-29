import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordComponent } from './inventory/record/record.component';
import { DeliverComponent } from './inventory/deliver/deliver.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './products/create/create.component';

const routes: Routes = [
  { path: 'registro-inventario', component: RecordComponent },
  { path: 'entregar-inventario', component: DeliverComponent },
  { path: 'create-product', component: CreateComponent },
  { path: '', redirectTo: '/registro-inventario', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
