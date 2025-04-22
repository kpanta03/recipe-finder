"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
# paxi added
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from recipes.views import RecipeViewSet
from django.conf import settings
from django.conf.urls.static import static


router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('', include(router.urls)),#delete paxi
    path('admin/', admin.site.urls),
    # authentication
    path('api/users/', include('users.urls'))#suru ma yo

# video ko
    # path('api/', include('users.urls')),

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
