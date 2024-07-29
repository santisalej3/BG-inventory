import { Injectable } from '@angular/core';
import { Inventory } from '../models/inventory.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InventarioService {
  constructor(private http: HttpClient) {}

  addInventory(inventory: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(
      `${environment.api.base}inventario/`,
      inventory,
      {
        headers,
      }
    );
  }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api.base}productos/`);
  }

  getIntentory(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.api.base}inventario/`);
  }

  updateInventory(id: number, inventory: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<any>(
      `${environment.api.base}inventario/${id}/`,
      inventory,
      {
        headers,
      }
    );
  }
}
