"""
URL configuration for cook_recipes_server project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.schemas import get_schema_view

from recipes.views import CategoryListAPIView, DishListAPIView, DishIngridientListAPIView
# from recipes.views import get_dish_data

urlpatterns = [
    path('admin/', admin.site.urls),
    path('categories/', CategoryListAPIView.as_view(), name='api_categories'),
    path('categories/<int:sel_cat>/', DishListAPIView.as_view(), name='api_dishes'),
    path('dishes/<int:sel_dish>/', DishIngridientListAPIView.as_view(), name='api_dishingridients'),
    path('openapi', get_schema_view(
        title="Cook Recipes",
        description="API for Cook Recipes"
    ), name='openapi-schema'),
]
