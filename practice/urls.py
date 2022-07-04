from django.urls import path
from practice import views

app_name = 'practice'

urlpatterns = [
    path('', views.home, name='home'),
    path('practice', views.practice, name='practice'),
]
