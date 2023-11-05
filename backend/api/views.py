from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from . import serializers
from django.contrib.auth.models import User


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAuthenticated, )
