from django.shortcuts import render

from django.http import HttpResponse, FileResponse, HttpResponseRedirect
from .forms import NameForm
# from django.contrib import messages

# Create your views here.
def index(request):
	return render(request, "index.html", {})

def osint(request):
	return render(request, "task1.html", {})

def encoded(request):
	if request.POST:
		print(request.POST)
		return render(request, "task2.html", {})
	else:
		return render(request, "congratulations.html", {})

def QRMania(request):
	if request.POST:
		val = request.POST['answer']
		print(val)
		if val.lower() == 'captain vikram batra':
			return render(request, "task3.html", {})
		else:
			# messages.info(request, 'Your password has been changed successfully!')
			message = {'message' : 'Wrong answer, Try again.'}
			return render(request, 'task2.html', message)
	else:
		return render(request, "congratulations.html", {})