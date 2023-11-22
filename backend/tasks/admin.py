from django.contrib import admin
from .models import Task, Tag, List

admin.site.register(Tag)
admin.site.register(List)
admin.site.register(Task)