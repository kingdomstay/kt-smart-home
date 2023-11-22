from django.db import models
from django.db.models import Q


class Task(models.Model):
    title = models.CharField(max_length=128, verbose_name="Название")
    description = models.TextField(verbose_name="Описание")
    is_complete = models.BooleanField(default=False, verbose_name="Выполнено")
    is_favorite = models.BooleanField(default=False, verbose_name="В избранном")
    created_by = models.DateTimeField(auto_now_add=True, verbose_name="Добавлено")
    updated_by = models.DateTimeField(auto_now=True, verbose_name="Последнее обновление")
    owner = models.ForeignKey('auth.User', related_name="owner", on_delete=models.CASCADE, verbose_name="Кем создана", limit_choices_to=Q(is_superuser=False))
    tags = models.ManyToManyField('Tag', related_name="tags", blank=True)
    assigned_by = models.ForeignKey('List', related_name="list", on_delete=models.CASCADE, verbose_name="Присвоено к", blank=True)

    class Meta:
        verbose_name = "задачу"
        verbose_name_plural = "задачи"

    def __str__(self):
        return self.title


class Tag(models.Model):
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name="Кем создано", null=False)
    name = models.CharField(max_length=64, verbose_name="Название")

    class Meta:
        verbose_name = "тег"
        verbose_name_plural = "теги"

    def __str__(self):
        return self.name


class List(models.Model):
    owner = models.ForeignKey('auth.User', on_delete=models.CASCADE, verbose_name="Кем создано", null=False)
    name = models.CharField(max_length=32, verbose_name="Название")

    class Meta:
        verbose_name = "список"
        verbose_name_plural = "списки"

    def __str__(self):
        return self.name
