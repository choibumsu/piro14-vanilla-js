from django.db import models


class Quiz(models.Model):
    question = models.TextField()

    def __str__(self):
        return self.title


class Example(models.Model):
    quiz = models.ForeignKey(
        Quiz, on_delete=models.CASCADE, related_name="examples")
    title = models.TextField()
    is_answer = models.BooleanField(default=False)

    def __str__(self):
        return self.title
