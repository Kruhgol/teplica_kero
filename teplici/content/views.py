# -*- coding: utf-8 -*-

from django.shortcuts import render, render_to_response, redirect
from django.http.response import HttpResponse, Http404
from django.template.context_processors import csrf
from content.models import Greenhouse, Photo, Galery, Client
from django.core.mail import send_mail

# Create your views here.

args = {}
args['host'] = 'http://127.0.0.1:8000/'


def email(request):
    c = Client.objects.create(client_name = request.POST['name'], client_number = request.POST['number'], client_email = request.POST['email'], client_describtion = '')
    send_mail('Новый заказ!', request.POST['text'], 'nmkdeveloper@gmail.com', ['kruhgol@gmail.com'], fail_silently=False)
    return HttpResponse('ok')

def index(request):
    args.update(csrf(request))
    return render_to_response('start.html', args)

def calculator(request):
    return render_to_response('calculator.html', args)

def contacts(request):
    return render_to_response('contacts.html', args)

def photos(request):
    args.update(csrf(request))
    photos = Galery.objects.all()[0].photo_set.all()
    args['columnFirst'] = []
    args['columnSecond'] = []
    args['columnThird'] = []
    args['columnFourth'] = []
    c = 0
    for img in photos:
        # del img.photo_set.url[0]
        if c == 0:
            args['columnFirst'].append(img)
            c = 1
        else:
            if c == 1:
                args['columnSecond'].append(img)
                c = 2
            else:
                if c == 2:
                    args['columnThird'].append(img)
                    c = 3
                else:
                    if c == 3:
                        args['columnFourth'].append(img)
                        c = 0
    return render_to_response('photos.html', args)

def products(request):
    args.update(csrf(request))
    args['greenhouses'] = Greenhouse.objects.all()
    return render_to_response('products.html', args)