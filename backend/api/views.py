from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    Получить список всех пользователей
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser, )

    @action(detail=False, methods=['GET'], permission_classes=(IsAuthenticated, ))
    def me(self, request):
        """
        Получить текущего пользователя
        """
        serializer = UserSerializer(request.user)
        return Response(serializer.data)
