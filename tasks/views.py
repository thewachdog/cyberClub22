from django.shortcuts import render

from django.http import HttpResponse, FileResponse, HttpResponseRedirect
from .forms import NameForm

# Create your views here.
def index(request):
	return render(request, "index.html", {})

def osint(request):
	return render(request, "task1.html", {})

def encoded(request):
	return render(request, "task2.html", {})

	if request.POST:
		return render(request, "task2.html", {})
	else:
		return render(request, "congratulations.html", {})