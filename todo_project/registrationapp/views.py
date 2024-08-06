from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login

def signup(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        lastname = request.POST.get('lastname')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password2 = request.POST.get('password2')

        if password == password2:
            if not User.objects.filter(username=username).exists():
                if not User.objects.filter(email=email).exists():
                    user = User.objects.create_user(username=username, email=email, password=password)
                    user.first_name = name  # Set first name
                    user.last_name = lastname  # Set last name
                    user.save()
                    user = authenticate(request, username=username, password=password)
                    if user is not None:
                        auth_login(request, user)  # Correct usage of login
                        return redirect('login')
                    else:
                        return HttpResponse('Authentication failed')
                else:
                    return HttpResponse('Email already exists')
            else:
                return HttpResponse('Username already exists')
        else:
            return HttpResponse('Passwords do not match')
    else:
        return render(request, 'registration/registration.html')


def login(request):
    return render(request, 'registration/login.html')
