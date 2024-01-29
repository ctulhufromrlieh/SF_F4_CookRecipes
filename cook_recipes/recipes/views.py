from django.shortcuts import render
from django.http import JsonResponse

from .models import Category, Dish, DishIngridient

# Create your views here.

def get_category_l(request):
    # qs = Profile.objects.all().exclude(id=request.user.profile.id).values("id", "user__username")
    qs = Category.objects.all()
    values = qs.values("id", "name")

    data = {
        "list": list(values),
    }

    return JsonResponse(data, safe=False)

def get_dish_l(request, sel_cat):
    qs = Dish.objects.all().filter(categories__id=sel_cat)
    values = qs.values("id", "title")

    data = {
        "list": list(values),
    }

    print(data)

    return JsonResponse(data, safe=False)

def get_dish_data(request, sel_dish):
    qs = DishIngridient.objects.all().filter(dish__id=sel_dish).distinct()
    values = list(qs.values("ingridient__id", "ingridient__name", "value"))

    data = {
        "ingredients": list(values),
    }

    return JsonResponse(data, safe=False)  