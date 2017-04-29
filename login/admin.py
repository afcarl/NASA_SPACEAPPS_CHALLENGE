from django.contrib import admin

from .models import User,Company

class UserAdmin(admin.ModelAdmin):
    list_display = ['username','email','company_id']

class ComapanyAdmin(admin.ModelAdmin):
    list_display = ['id','company_name']



admin.site.register(User,UserAdmin)
admin.site.register(Company,ComapanyAdmin)
