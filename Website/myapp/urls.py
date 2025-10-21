from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_view, name="home"),
    path('delete/', views.delete_view, name="delete"),
    path('login/', views.login_view, name="login"),
    path('dashboard/', views.dashboard_view, name="dashboard"),
    path('edit-transaction/', views.edit_transaction_view, name="edit_transaction"),
    path('add-transaction/', views.add_transaction_view, name="add_transaction"),
]
