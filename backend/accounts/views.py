import logging

from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from django.http import HttpResponseForbidden
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from .models import CustomUser
from .serializers import CustomUserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

logger = logging.getLogger(__name__)

class RegisterView(generics.CreateAPIView):
    queryset = CustomUser.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = CustomUserSerializer

    def create(self, request, *args, **kwargs):
        logger.debug('Request data: %s', request.data)
        response = super().create(request, *args, **kwargs)
        if response.status_code != 201:
            logger.error('Error creating user: %s', response.data)
        user = CustomUser.objects.get(username=response.data['username'])
        refresh = RefreshToken.for_user(user)
        response.data['refresh'] = str(refresh)
        response.data['access'] = str(refresh.access_token)
        logger.debug('Response data: %s', response.data)
        return response

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = CustomUserSerializer(request.user)
        return Response(serializer.data)

@login_required
def unit_economics(request):
    if request.user.has_access:
        return render(request, 'unit_economics.html')
    else:
        return HttpResponseForbidden("You need access from the administrator.")

@login_required
def calculator(request):
    if request.user.has_access:
        return render(request, 'calculator.html')
    else:
        return HttpResponseForbidden("You need access from the administrator.")

@login_required
def user_dashboard(request):
    return render(request, 'user_dashboard.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if user.is_superuser:
                return redirect('/secret-admin/')  # Перенаправление на спрятанную админку
            else:
                return redirect('user_dashboard')
        else:
            # Return an 'invalid login' error message.
            return render(request, 'registration/login.html', {'error': 'Invalid login credentials'})
    else:
        return render(request, 'registration/login.html')