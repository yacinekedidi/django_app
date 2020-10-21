from django.db import models

# Create your models here.
gender = (
    ("male", "male"),
    ("female", "female"),
)


class Family(models.Model):

    id = models.AutoField(primary_key=True)
    cin = models.CharField(max_length=20, unique=True)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    sex = models.CharField(max_length=20, choices=gender, default="male")
    birthdate = models.DateField()
    address = models.CharField(max_length=20)
    phone = models.CharField(max_length=20)
    health_insurance = models.CharField(max_length=20)
    job = models.CharField(max_length=20)
    income = models.IntegerField()
    home_status = models.CharField(max_length=20)
    home_owner = models.CharField(max_length=20)
    health_status = models.CharField(max_length=20) 
    deceased_parent_name = models.CharField(max_length=20)
    cause_of_death = models.CharField(max_length=20)
    sponsor_name = models.CharField(max_length=20)
    family_status = models.CharField(max_length=20)


class Orphan(models.Model):
    id = models.AutoField(primary_key=True)
    family_id = models.ForeignKey(Family, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    sex = models.CharField(max_length=20, choices=gender, default="male")
    birthdate = models.DateField()
    hobbies = models.CharField(max_length=20)
    education_status = models.CharField(max_length=20)
    health_status = models.CharField(max_length=20)


class Subsidy(models.Model):
    id = models.AutoField(primary_key=True)
    sub_type = models.CharField(max_length=20)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    price_unit = models.IntegerField()
    gender = models.CharField(max_length=20, choices=gender, default="male")
    age_min = models.IntegerField()
    age_max = models.IntegerField()
    status = models.CharField(max_length=20)
    amount = models.IntegerField()
    unit = models.CharField(max_length=20)


class OrphanEducation(models.Model):
    FRESHMAN = 'FR'
    SOPHOMORE = 'SO'
    JUNIOR = 'JR'
    SENIOR = 'SR'
    GRADUATE = 'GR'
    YEAR_IN_SCHOOL_CHOICES = [
        (FRESHMAN, 'Freshman'),
        (SOPHOMORE, 'Sophomore'),
        (JUNIOR, 'Junior'),
        (SENIOR, 'Senior'),
        (GRADUATE, 'Graduate'),
    ]
    id = models.AutoField(primary_key=True)
    orphan_id = models.ForeignKey(Orphan, on_delete=models.CASCADE)
    school = models.CharField(max_length=20)
    grade_year = models.CharField(
        max_length=20, choices=YEAR_IN_SCHOOL_CHOICES, default=FRESHMAN)
    success = models.CharField(max_length=20)
    score = models.IntegerField()
    updated = models.IntegerField()


class family_subsidy(models.Model):
    family_id = models.ForeignKey(Family, on_delete=models.CASCADE)
    subsidy_id = models.ForeignKey(Subsidy, on_delete=models.CASCADE)
