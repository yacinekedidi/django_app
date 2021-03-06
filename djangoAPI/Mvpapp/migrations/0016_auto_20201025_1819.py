# Generated by Django 3.1.2 on 2020-10-25 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Mvpapp', '0015_auto_20201025_1817'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orphaneducation',
            name='grade_year',
            field=models.CharField(choices=[('PRE', 'Preschool'), ('1', 'First'), ('2', 'Second'), ('3', 'Third'), ('4', 'Fourth'), ('5', 'Fifth'), ('6', 'SIXth'), ('7', 'Seventh'), ('8', 'Eighth'), ('9', 'Ninth'), ('10', 'Tenth'), ('11', 'Eleventh'), ('12', 'Twelfth'), ('13', 'Thirteenth'), ('UNI', 'University'), ('GR', 'Graduate')], default='GR', max_length=3, null=True),
        ),
    ]
