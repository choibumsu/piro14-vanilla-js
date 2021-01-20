from django.shortcuts import render


def home(request):
    return render(request, 'practice/home.html')
