# Generated by Django 3.2 on 2021-04-17 11:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0006_rename_categoryid_books_category_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='books',
            old_name='category_id',
            new_name='categoryId',
        ),
    ]
