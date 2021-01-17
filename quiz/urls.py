from django.urls import path
from quiz import views

app_name = 'quiz'

urlpatterns = [
    path('', views.home, name='home'),
    path('quiz', views.home, name='quiz'),
    path('result', views.home, name='result'),
    path('api/get/quiz-list', views.get_quiz_list, name='get_quiz_list')
]
