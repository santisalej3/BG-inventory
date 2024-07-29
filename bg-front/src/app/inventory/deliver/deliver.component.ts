import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-deliver',
  templateUrl: './deliver.component.html',
  styleUrls: ['./deliver.component.css'],
})
export class DeliverComponent implements OnInit {
  inventorys: any[] = [];

  constructor(private inventarioService: InventarioService) {}

  ngOnInit(): void {
    this.inventarioService.getIntentory().subscribe((data) => {
      this.inventorys = data;
    });
  }

  entregarProducto(inventory: any) {
    inventory.estado_entrega = 'Entregado';
    this.inventarioService.updateInventory(inventory.id, inventory).subscribe(
      (response) => {
        console.log('response = ', response);
        console.log('Producto entregado:', response);
      },
      (error) => {
        console.error('Error al entregar producto:', error.error);
      }
    );
  }
}
