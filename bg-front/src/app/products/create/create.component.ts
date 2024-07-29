import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/service/products.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.productForm = this.fb.group({
      tipo_producto: ['', Validators.required],
      fecha_ultima_modificacion: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productsService.createProduct(this.productForm.value).subscribe(
        (response) => {
          this.toastr.success('Producto creado exitosamente', 'Éxito');
          this.router.navigate(['/products']);
          console.log('Producto creado:', response);
        },
        (error) => {
          console.error('Error al crear el producto:', error);
          this.toastr.error('Hubo un error al crear el producto', 'Error');
        }
      );
    }
  }
}
