# Generated by Django 3.2 on 2021-04-10 13:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_auto_20210410_1850'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='categories',
            options={'ordering': ['title'], 'verbose_name': 'Категория', 'verbose_name_plural': 'Категории'},
        ),
        migrations.AlterField(
            model_name='categories',
            name='title',
            field=models.CharField(db_index=True, max_length=150, verbose_name='Наименовании категории'),
        ),
    ]