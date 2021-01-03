from .models import *
from rest_framework import serializers
from rest_framework import generics

#serializers.HyperlinkedModelSerializer

class UserSerialiezer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ArticleSerialiezer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(read_only=True, format="%Y-%m-%d")
    updated_at = serializers.DateTimeField(read_only=True, format="%Y-%m-%d")
    class Meta:
        model = Article
        fields = '__all__'



