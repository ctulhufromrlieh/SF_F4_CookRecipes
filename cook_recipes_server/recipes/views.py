from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.generics import ListAPIView

from .serializers import CategorySerializer, DishSerializer, DishIngridientSerializer
from .models import Category


from .models import Category, Dish, DishIngridient

# Create your views here.

class CategoryListAPIView(ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Category.objects.all()
    
class DishListAPIView(ListAPIView):
    serializer_class = DishSerializer
    sel_cat_field = "sel_cat"

    def get_queryset(self):
        sel_cat = self.kwargs.get(self.sel_cat_field)
        return Dish.objects.all().filter(categories__id=sel_cat)
    
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)

        sel_cat = self.kwargs.get(self.sel_cat_field)
        categories = Category.objects.all().filter(id=sel_cat)
        if categories.count():
            name = categories[0].name
            response.data = {'status': 'success', 'name': name, 'data': response.data,}
        else:
            response.data = {}
            response.status_code = 404

        return response
    
class DishIngridientListAPIView(ListAPIView):
    serializer_class = DishIngridientSerializer
    sel_dish_field = "sel_dish"

    def get_queryset(self):
        sel_dish = self.kwargs.get(self.sel_dish_field)
        return DishIngridient.objects.all().filter(dish__id=sel_dish)
    
    def list(self, request, *args, **kwargs):
        response = super().list(request, *args, **kwargs)

        sel_dish = self.kwargs.get(self.sel_dish_field)
        dishes = Dish.objects.all().filter(id=sel_dish)
        if dishes.count():
            title = dishes[0].title
            response.data = {'status': 'success', 'title': title, 'data': response.data,}
        else:
            response.data = {}
            response.status_code = 404

        return response

# def get_category_l(request):
#     # qs = Profile.objects.all().exclude(id=request.user.profile.id).values("id", "user__username")
#     qs = Category.objects.all()
#     values = qs.values("id", "name")

#     data = {
#         "list": list(values),
#     }

#     return JsonResponse(data, safe=False)

# def get_dish_l(request, sel_cat):
#     qs = Dish.objects.all().filter(categories__id=sel_cat)
#     values = qs.values("id", "title")

#     data = {
#         "list": list(values),
#     }

#     print(data)

#     return JsonResponse(data, safe=False)

# def get_dish_data(request, sel_dish):
#     qs = DishIngridient.objects.all().filter(dish__id=sel_dish).distinct()
#     values = list(qs.values("ingridient__id", "ingridient__name", "value"))

#     data = {
#         "ingredients": list(values),
#     }

#     return JsonResponse(data, safe=False)  