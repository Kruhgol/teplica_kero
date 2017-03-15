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
