from django.shortcuts import redirect
from django.urls import reverse

class AccessControlMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated:
            request.user.update_access_status()
            if not request.user.has_access and request.path not in [reverse('login'), reverse('logout')]:
                return redirect('login')
        response = self.get_response(request)
        return response
