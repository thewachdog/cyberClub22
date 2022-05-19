from django.shortcuts import render

from django.http import HttpResponse, FileResponse, HttpResponseRedirect
from .forms import NameForm
# from django.contrib import messages
from django.template import RequestContext

def handler404(request):
    return render(request, '404.html', {})

# Create your views here.
def index(request):
	return render(request, "index.html", {})

def osint(request):
	return render(request, "task1.html", {})

def encoded(request):
	if request.POST:
		return render(request, "task2.html", {})
	else:
		return render(request, "404.html", {})

def QRMania(request):
	if request.POST:
		val = request.POST['answer']
		# print(val)
		if val.lower() == 'captain vikram batra':
			return render(request, "task3.html", {})
		else:
			# messages.info(request, 'Your password has been changed successfully!')
			message = {'message' : 'Wrong answer, Try again.'}
			return render(request, 'task2.html', message)
	else:
		return render(request, "404.html", {})


def sample1(request):
	return render(request, 'sample1.html', {})

def sample2(request):
	return render(request, 'sample2.html', {})

def sample3(request):
	return render(request, 'sample3.html', {})