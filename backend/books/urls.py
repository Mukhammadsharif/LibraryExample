from django.urls import path
from .views import books_list
from .views import books_detail
from .views import get_categories
from .views import get_category
from .views import sort_books

urlpatterns = [
    path('books-list/', books_list),
    path('books-detail/<int:pk>/', books_detail),
    path('categories', get_categories),
    path('category/<int:pk>/', get_category),
    path('sort-books/<int:pk>/', sort_books),
]