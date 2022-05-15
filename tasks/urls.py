from django.urls import path

from . import views

urlpatterns = [
	path('', views.index) ,
	path('osint.html', views.osint) ,
	path('encoded.html', views.encoded),
	path('QRMania.html', views.QRMania),
]
