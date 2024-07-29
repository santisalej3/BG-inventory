from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductoViewSet, InventarioViewSet

router = DefaultRouter()
router.register(r'productos', ProductoViewSet)
router.register(r'inventario', InventarioViewSet)

urlpatterns = [
    path('', include(router.urls)),
]