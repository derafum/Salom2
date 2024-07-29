from django.contrib import admin
from .models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    list_display = ('username', 'email', 'has_access', 'subscription_duration', 'days_remaining')
    list_filter = ('has_access', 'subscription_duration')
    search_fields = ('username', 'email')
    ordering = ('username',)
    fields = ('username', 'email', 'has_access', 'subscription_duration', 'subscription_start_date', 'days_remaining')
    readonly_fields = ('username', 'email', 'days_remaining')

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        if not request.user.is_superuser:
            for field in form.base_fields:
                if field not in self.readonly_fields and field != 'has_access':
                    form.base_fields[field].disabled = True
        return form

admin.site.register(CustomUser, CustomUserAdmin)
