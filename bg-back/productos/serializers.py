from rest_framework import serializers
from .models import Producto, Inventario

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class InventarioSerializer(serializers.ModelSerializer):
    producto_asignado_nombre = serializers.ReadOnlyField(source='producto_asignado.tipo_producto')
    class Meta:
        model = Inventario
        fields = '__all__'
