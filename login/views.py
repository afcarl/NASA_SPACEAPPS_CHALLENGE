from django.shortcuts import render
from django.http import Http404
from django.http import HttpResponse
import csv


def index(request):
    #return HttpResponse('HELLO')
    return render(request,'login/login.html')

def main(request):
    return render(request,'login/main.html')

def cube(request):
    return render(request,'login/cube.html')

def plane(request):
    return render(request,'login/plane.html')

def data(request,id):
    try:
        csvfile = open('data' + id + '.csv')
        datastring = ''
        reader = csv.reader(csvfile)
        print(reader)
        for row in reader:
            datastring  += ','.join(row[:4])
            datastring += '|'
            # break
        return HttpResponse(datastring)
    except FileNotFoundError:
        raise Http404('This data does not exist')
