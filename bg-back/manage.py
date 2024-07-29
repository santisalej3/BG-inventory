#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'inventariobg.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc

    # Verifica si el script se ejecuta con el argumento "createsuperuser"
    if len(sys.argv) > 1 and sys.argv[1] == 'createsuperuser':
        create_superuser()
    else:
        execute_from_command_line(sys.argv)

def create_superuser():
    """Create a superuser."""
    import django
    django.setup()
    
    from django.contrib.auth.models import User

    # Datos del superusuario
    username = 'ssalej'
    email = 'email@dominio.com'
    password = 'ssalej14'

    # Verifica si el superusuario ya existe para no duplicarlo
    if not User.objects.filter(username=username).exists():
        User.objects.create_superuser(username, email, password)
        print("Superusuario creado con éxito")
    else:
        print("El superusuario ya existe")

if __name__ == '__main__':
    main()
