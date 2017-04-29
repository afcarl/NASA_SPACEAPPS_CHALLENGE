from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.TextField(null=True)
    company_id = models.IntegerField(max_length =20, null = True)
    address = models.TextField(null = True)
    website = models.URLField(max_length=20, null=True, blank=True)

class Company(models.Model):
    company_name = models.CharField(max_length = 50, null = True)

class admin_table(models.Model):
    pass
