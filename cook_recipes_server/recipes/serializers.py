from .models import Category, Dish, DishIngridient
from rest_framework import serializers

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name',)

class DishSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Dish
        fields = ('id', 'title',)

# class DishIngridientSerializer(serializers.ModelSerializer):
#     class Meta: 
#         task_extendeds = Task_extendedSerializer(many=True)
#         model = DishIngridient
#         fields = ('ingridient__id', 'ingridient__name', 'value',)
        

class DishIngridientSerializer(serializers.ModelSerializer):
    ingridient_id = serializers.IntegerField()
    ingridient_name = serializers.CharField()

    class Meta:         
        model = DishIngridient
        fields = ('ingridient_id', 'ingridient_name', 'value',)