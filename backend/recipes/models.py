from django.db import models
# Create your models here.

class Recipe(models.Model):
    title = models.CharField(max_length=255)
    ingredients = models.JSONField()  # Storing as a list of ingredients
    time = models.CharField(max_length=50)
    mealType = models.CharField(max_length=50)
    image = models.URLField()  # Image URL
    sideImage = models.URLField()  # Side image URL
    favourites = models.IntegerField(default=0)
    steps = models.JSONField()  # Storing steps as a list
    video = models.FileField(upload_to='recipe_videos/', blank=True, null=True)  # Optional video URL

    def __str__(self):
        return self.title
    


