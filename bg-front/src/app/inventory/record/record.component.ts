import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InventarioService } from 'src/app/service/inventory.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  productos: any[] = [];

  constructor(
    private inventarioService: InventarioService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.inventarioService.getProductos().subscribe((data) => {
      this.productos = data;
      // console.log('esta es la data de productos', this.productos[0]);
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      const nuevoInventario = {
        nombre_usuario: form.value.nombreUsuario,
        producto_asignado: form.value.producto,
        numero_serie: form.value.numeroSerie,
        fecha_asignacion: form.value.fechaCreacion,
        estado_entrega: 'Por entregar',
      };

      this.inventarioService.addInventory(nuevoInventario).subscribe(
        (data) => {
          this.toastr.success(
            `El registro se ha creado con éxito`,
            '¡Registro creado!',
            {
              timeOut: 10000,
            }
          );
          form.reset();
        },
        (error) => {
          this.toastr.error(`El registro no se ha creado`, 'Error', {
            timeOut: 10000,
          });
        }
      );
    }
  }
}
