from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from . import settings
from dishes.views import schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/v1/", include('dishes.urls')),
    path('documents/', schema_view.with_ui('redoc'), name='schema-redoc'),
    path('swagger/', schema_view.with_ui('swagger'), name='schema-swagger-ui'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)