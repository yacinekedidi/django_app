# Generated by Django 3.1.2 on 2020-10-22 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mvpapp', '0002_auto_20201022_0711'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orphan',
            name='hobbies',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AlterField(
            model_name='subsidy',
            name='gender',
            field=models.CharField(blank=True, choices=[('male', 'male'), ('female', 'female')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='subsidy',
            name='status',
            field=models.CharField(blank=True, max_length=20, null=True),
        ),
    ]
