from django.contrib import admin
from .models import Books
from .models import Categories

# Register your models here.
admin.site.register(Books)
admin.site.register(Categories)