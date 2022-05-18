from django.urls import path

from . import views

urlpatterns = [
	path('', views.index) ,
	path('osint.html', views.osint) ,
	path('encoded.html', views.encoded),
	path('QRMania.html', views.QRMania),
	path('sample1.html', views.sample1),
	path('sample2.html', views.sample2),
	path('sample3.html', views.sample3),
]
