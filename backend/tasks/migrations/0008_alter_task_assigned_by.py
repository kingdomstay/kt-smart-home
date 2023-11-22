# Generated by Django 4.2.6 on 2023-11-20 15:36

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_list_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='assigned_by',
            field=models.ForeignKey(limit_choices_to={'owner': ''}, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='list', to='tasks.list', verbose_name='Присвоено к'),
        ),
    ]
