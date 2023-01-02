from django.shortcuts import render


def home(request):
    return render(request, 'practice/home.html')


def practice(request):
    return render(request, 'practice/practice.html')


def modal(request):
    return render(request, 'practice/modal.html')

def accordion(request):
    return render(request, 'practice/accordion.html')

def infinite_scroll(request):
    return render(request, 'practice/infinite_scroll.html')
