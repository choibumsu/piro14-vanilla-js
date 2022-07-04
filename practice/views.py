from django.shortcuts import render


def home(request):
    return render(request, 'practice/home.html')


def practice(request):
    return render(request, 'practice/practice.html')
