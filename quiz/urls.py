from django.urls import path
from quiz import views

app_name = 'quiz'

urlpatterns = [
    path('', views.home, name='home'),
    path('quiz', views.home, name='quiz'),
    path('result', views.home, name='result'),
]
