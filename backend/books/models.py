from django.db import models
from django.urls import reverse

# Create your models here.

class Categories(models.Model):
    title = models.CharField(max_length = 150, db_index = True, verbose_name="Наименовании категории")

    def __str__(self):
        return self.title
    class Meta:
         verbose_name = "Категория"
         verbose_name_plural = "Категории"
         ordering = ['title']
        


class Books(models.Model):
    title = models.CharField(max_length = 255)
    author = models.CharField(max_length=255, blank=True)
    photo = models.ImageField(blank=True, null=True)
    date = models.DateTimeField(auto_now_add = True)
    categoryId = models.ForeignKey(Categories, on_delete = models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title

