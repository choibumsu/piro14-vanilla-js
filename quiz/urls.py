from django.urls import path
from quiz import views

app_name = 'quiz'

urlpatterns = [
    path('', views.home, name='home'),
]
