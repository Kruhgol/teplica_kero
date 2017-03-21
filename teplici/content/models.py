# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Greenhouse(models.Model):
    class Meta:
        db_table = "Тип теплицы"
    greenhouse_title = models.CharField(max_length=200, help_text='Тип теплицы')
    greenhouse_width = models.CharField(max_length=200, help_text='Ширина')
    greenhouse_height = models.CharField(max_length=200, help_text='Высота')
    greenhouse_frontImage = models.ImageField(null=True, upload_to='images', verbose_name='photo', help_text='Вид с боку')
    greenhouse_image = models.ImageField(null=True, upload_to='images', verbose_name='photo', help_text='Общий вид')
    
    def __unicode__(self):
        return self.greenhouse_title

class Galery(models.Model):
    class Mets:
        db_table = "Галерея"
    galery_title = models.CharField(max_length=200)

    def __unicode__(self):
        return 'Галерея'

class Photo(models.Model):
    class Meta:
        db_table = "Фото"
    photo_place = models.ImageField(null=True, upload_to='images', verbose_name='photo', help_text='Общий вид')
    photo_album = models.ForeignKey(Galery, null=True)

    def __unicode__(self):
        return 'Фото'

class Client(models.Model):
    class Meta:
        db_table = "Клиент"
    client_name = models.CharField(null=True, max_length=200, help_text='Имя клиента')
    client_number = models.CharField(null=True, max_length=200, help_text='Номер телефона клиента')
    client_email = models.CharField(null=True, max_length=200, help_text='Email клиента')
    client_describtion = models.TextField(null=True, help_text='Сдесь Вы можете оставить заметку')
    def __unicode__(self):
        return self.client_name