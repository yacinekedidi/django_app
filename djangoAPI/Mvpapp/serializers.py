from rest_framework import serializers
from Mvpapp.models import Family, Orphan, Subsidy, family_subsidy, OrphanEducation


class FamilySerializer(serializers.ModelSerializer):
    class Meta:
        model = Family
        fields = ('id',
                  'cin',
                  'first_name',
                  'last_name',
                  'sex',
                  'birthdate',
                  'address',
                  'phone',
                  'health_insurance',
                  'job',
                  'income',
                  'home_status',
                  'home_owner',
                  'health_status',
                  'deceased_parent_name',
                  'cause_of_death',
                  'sponsor_name',
                  'family_status')


class OrphanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Orphan
        fields = ('id',
                  'family_id',
                  'first_name',
                  'last_name',
                  'sex',
                  'birthdate',
                  'hobbies',
                  'education_status',
                  'health_status')


class SubsidySerializer(serializers.ModelSerializer):
    class Meta:
        model = Subsidy
        fields = ('id',
                  'sub_type',
                  'title',
                  'description',
                  'price_unit',
                  'gender',
                  'age_min',
                  'age_max',
                  'status',
                  'amount',
                  'unit')


class FamilySubsidySerializer(serializers.ModelSerializer):
    class Meta:
        model = family_subsidy
        fields = ('subsidy_id',
                  'family_id',)


class OrphanEducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrphanEducation
        fields = ('id',
                  'orphan_id',
                  'school',
                  'grade_year',
                  'success',
                  'score',
                  'updated')
