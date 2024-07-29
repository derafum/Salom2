from django.contrib.auth.models import AbstractUser
from django.db import models
from datetime import timedelta, date

class CustomUser(AbstractUser):
    telegram_account = models.CharField(max_length=100, blank=True, null=True)
    has_access = models.BooleanField(default=False)
    subscription_duration = models.PositiveIntegerField(
        choices=[
            (1, '1 месяц'),
            (3, '3 месяца'),
            (6, '6 месяцев')
        ],
        blank=True,
        null=True
    )
    subscription_start_date = models.DateField(blank=True, null=True)

    @property
    def days_remaining(self):
        if self.subscription_start_date and self.subscription_duration:
            end_date = self.subscription_start_date + timedelta(days=self.subscription_duration * 30)
            remaining_days = (end_date - date.today()).days
            return max(remaining_days, 0)
        return None

    def update_access_status(self):
        if self.days_remaining == 0 and self.has_access:
            self.has_access = False
            self.save()
