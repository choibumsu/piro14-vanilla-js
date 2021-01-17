from django.contrib import admin
from quiz.models import *


@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ('pk', 'question')


@admin.register(Example)
class ExampleAdmin(admin.ModelAdmin):
    list_display = ('pk', 'quiz', 'title', 'is_answer')

    def get_queryset(self, request):
        return self.model.objects.select_related('quiz').all()

    def quiz(self, obj):
        return obj.quiz.question
