from django.db import models
from django.contrib.auth.models import User

class Producto(models.Model):
    tipo_producto = models.CharField(max_length=255)
    fecha_modificacion = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.tipo_producto

class Inventario(models.Model):
    nombre_usuario = models.CharField(max_length=255)
    producto_asignado = models.ForeignKey(Producto, on_delete=models.CASCADE)
    numero_serie = models.CharField(max_length=100, unique=True)
    estado_entrega = models.CharField(max_length=255)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre_usuario
