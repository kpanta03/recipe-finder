# Generated by Django 5.1.6 on 2025-02-20 12:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0003_rename_side_image_recipe_sideimage'),
    ]

    operations = [
        migrations.RenameField(
            model_name='recipe',
            old_name='meal_type',
            new_name='mealType',
        ),
    ]
