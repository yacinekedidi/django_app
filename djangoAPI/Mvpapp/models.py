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
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    health_insurance = models.CharField(max_length=50)
    job = models.CharField(max_length=50)
    income = models.IntegerField()
    home_status = models.CharField(max_length=20)
    home_owner = models.CharField(max_length=40)
    health_status = models.CharField(max_length=100) 
    deceased_parent_name = models.CharField(max_length=50)
    cause_of_death = models.CharField(max_length=100)
    sponsor_name = models.CharField(max_length=40, null=True)
    family_status = models.CharField(max_length=50)


class Orphan(models.Model):
    id = models.AutoField(primary_key=True)
    family_id = models.ForeignKey(Family, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    sex = models.CharField(max_length=20, choices=gender, default="male")
    birthdate = models.DateField()
    hobbies = models.CharField(max_length=200, null=True, blank=True)
    education_status = models.CharField(max_length=20)
    health_status = models.CharField(max_length=200)


class Subsidy(models.Model):
    id = models.AutoField(primary_key=True)
    sub_type = models.CharField(max_length=20)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    price_unit = models.IntegerField(null=True)
    gender = models.CharField(max_length=20, choices=gender, null=True, blank=True)
    age_min = models.IntegerField(null=True)
    age_max = models.IntegerField(null=True)
    status = models.CharField(max_length=20, null=True, blank=True)
    amount = models.IntegerField()
    unit = models.CharField(max_length=20)


class OrphanEducation(models.Model):
    PRESCHOOL = 'PRE'
    ONE = '1'
    TWO = '2'
    Three = '3'
    FOUR = '4'
    FIVE = '5'
    SIX = '6'
    SEVEN = '7'
    EIGHT = '8'
    NINE = '9'
    TEN = '10'
    ELEVEN = '11'
    TWELVE = '12'
    THIRTEEN = '13'
    UNIVERSITY = 'UNI'
    YEAR_IN_SCHOOL_CHOICES = [
        (PRESCHOOL, 'Preschool'),
        (ONE, 'First'),
        (TWO, 'Second'),
        (Three, 'Third'),
        (FOUR, 'Fourth'),
        (FIVE, 'Fifth'),
        (SIX, 'SIXth'),
        (SEVEN, 'Seventh'),
        (EIGHT, 'Eighth'),
        (NINE, 'Ninth'),
        (TEN, 'Tenth'),
        (ELEVEN, 'Eleventh'),
        (TWELVE, 'Twelfth'),
        (THIRTEEN, 'Thirteenth'),
        (UNIVERSITY, 'University'),
    ]
    id = models.AutoField(primary_key=True)
    orphan_id = models.ForeignKey(Orphan, on_delete=models.CASCADE)
    school = models.CharField(max_length=20)
    grade_year = models.CharField(
        max_length=20, choices=YEAR_IN_SCHOOL_CHOICES, default=PRESCHOOL)
    success = models.CharField(max_length=20)
    score = models.IntegerField()
    updated = models.IntegerField()


class family_subsidy(models.Model):
    family_id = models.ForeignKey(Family, on_delete=models.CASCADE)
    subsidy_id = models.ForeignKey(Subsidy, on_delete=models.CASCADE)
    sub_amount = models.IntegerField(default=0)