from django.urls import re_path
from . import views
from django.contrib import admin
from django.urls import path, include

from django.urls import path, include


urlpatterns = [
    re_path('login', views.login),
    re_path('signup', views.signup),
    re_path('test_token', views.test_token),

    path("", include("tasks.urls")),

    path('admin/', admin.site.urls),
    path('tasks/', include('tasks.urls')),
]
