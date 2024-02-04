from django.contrib import admin

# Register your models here.
from .models import Category, Ingridient, Dish, DishCategory, DishIngridient

# Register your models here.
# class CategoryAdmin(admin.ModelAdmin):
#     list_display = ('name',)

class DishCategoryAdminInline(admin.TabularInline):
    model = DishCategory
    extra=1

class DishIngridientAdminInline(admin.TabularInline):
    model = DishIngridient
    extra=1

class DishAdmin(admin.ModelAdmin):
    model = Dish
    # filter_horizontal = ('categories',)
    list_display = ('title',)
    inlines = (DishCategoryAdminInline, DishIngridientAdminInline,)

# Register your models here.
# admin.site.register(Category, CategoryAdmin)
admin.site.register(Category)
admin.site.register(Ingridient)
# admin.site.unregister(Dish)
admin.site.register(Dish, DishAdmin)
admin.site.register(DishCategory)
admin.site.register(DishIngridient)
