from django.db import models

class User(models.Model):
    username = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.TextField(null=True)
    company_name = models.CharField(max_length=50)
    address = models.TextField()
    website = models.URLField(max_length=20, null=True, blank=True)
