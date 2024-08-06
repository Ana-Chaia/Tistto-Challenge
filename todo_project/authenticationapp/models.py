from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

class Profile(models.Model):
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.TextField()
    email = models.EmailField()
    password = models.CharField(max_length=10)

    def __str__(self):
        return self.user.username
