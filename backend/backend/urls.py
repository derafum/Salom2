from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('secret-admin/', admin.site.urls),  # Спрятанная ссылка для админки
    path('accounts/', include('accounts.urls')),
    path('accounts/', include('django.contrib.auth.urls')),
]
