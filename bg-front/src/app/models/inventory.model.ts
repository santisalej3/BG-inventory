export class Inventory {}

export interface Inventario {
  id: number;
  nombre_usuario: string;
  numero_serie: string;
  producto_asignado_id: string;
  fecha_creacion: string;
  estado_entrega: string;
}

export interface Producto {
  id: number;
  tipo_producto: Producto;
  fecha_modificacion: string;
}
