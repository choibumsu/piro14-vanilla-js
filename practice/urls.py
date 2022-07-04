from django.urls import path
from practice import views

app_name = 'practice'

urlpatterns = [
    path('', views.home, name='home'),
    path('practice', views.practice, name='practice'),
    path('modal', views.modal, name='modal'),
    path('infinite-scroll', views.infinite_scroll, name='infinite_scroll')
]
