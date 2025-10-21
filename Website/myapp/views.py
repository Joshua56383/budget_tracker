from django.shortcuts import render

# Create your views here.
def delete_view(request):
    return render(request, "delete.html")

def home_view(request):
    return render(request, "home.html")
    
def login_view(request):
    return render(request, "login.html")

def dashboard_view(request):
    return render(request, "dashboard.html")

def edit_transaction_view(request):
    return render(request, "edit_transaction.html")

def add_transaction_view(request):
    return render(request, "add_transaction.html")