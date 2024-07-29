from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import user_logged_in
from .models import CustomUser

@receiver(user_logged_in)
def update_user_access(sender, user, request, **kwargs):
    user.update_access_status()
