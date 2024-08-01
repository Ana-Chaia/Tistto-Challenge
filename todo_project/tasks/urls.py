from django.urls import path
from . import views

urlspatterns = [
    path("all", views.todo_list),

]