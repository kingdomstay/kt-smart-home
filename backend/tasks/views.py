from rest_framework import viewsets, permissions


from .models import Task
from .serializers import TaskSerializer


class TaskViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return Task.objects.filter(owner=self.request.user)
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated, ]
