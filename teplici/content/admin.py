from django.contrib import admin

# Register your models here.
from content.models import Greenhouse, Galery, Photo

class GreenhouseAdmin(admin.ModelAdmin):
    fields = ['greenhouse_title','greenhouse_width','greenhouse_height','greenhouse_frontImage','greenhouse_image']

# class PhotoAdmin(admin.ModelAdmin):
#     fields = ['photo_galery', 'photo_place']

class PhotoInline(admin.StackedInline):
    model = Photo
    extra = 1

class GaleryAdmin(admin.ModelAdmin):
    fields = ['galery_title']
    inlines = [PhotoInline]



admin.site.register(Greenhouse, GreenhouseAdmin)
admin.site.register(Galery, GaleryAdmin)
# admin.site.register(Photo, PhotoAdmin)
