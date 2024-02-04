from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True, help_text="Category name")

    def __str__(self):
        return self.name
    
class Ingridient(models.Model):
    name = models.CharField(max_length=255, unique=True, help_text="Ingridient name")

    def __str__(self):
        return self.name
    
class Dish(models.Model):
    title = models.CharField(max_length=255, unique=True)
    categories = models.ManyToManyField(Category, through="DishCategory")
    ingridients = models.ManyToManyField(Ingridient, through="DishIngridient", related_name="dishes")

class DishCategory(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name="dish_categories")
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="dish_categories")

class DishIngridient(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name="dish_ingridients")
    ingridient = models.ForeignKey(Ingridient, on_delete=models.CASCADE, related_name="dish_ingridients")
    value = models.CharField(max_length=255, help_text="Ingridient value")

    @property
    def ingridient_id(self):
        return self.ingridient.id
    
    @property
    def ingridient_name(self):
        return self.ingridient.name