# Generated by Django 3.1.2 on 2020-10-22 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mvpapp', '0003_auto_20201022_0753'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subsidy',
            name='price_unit',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
