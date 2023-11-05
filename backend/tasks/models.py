from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=128, verbose_name="Название задачи")
    description = models.TextField(verbose_name="Описание задачи")
    completed = models.BooleanField(default=False, verbose_name="Выполнено")
    created = models.DateTimeField(auto_now_add=True, verbose_name="Создано")
    updated = models.DateTimeField(auto_now=True, verbose_name="Обновлено")
    owner = models.ForeignKey('auth.User', related_name='tasks', on_delete=models.CASCADE, verbose_name="Кем создано")

    class Meta:
        verbose_name = "задачу"
        verbose_name_plural = "задачи"

    def __str__(self):
        return self.title
