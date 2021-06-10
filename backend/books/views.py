from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Books
from .serializers import BooksSerializer
from .models import Categories
from .serializers import CategoriesSerializer

# Create your views here.
@api_view(['GET', 'POST'])
def books_list(request):
    if request.method == 'GET':
        books = Books.objects.all()
        serializer = BooksSerializer(books, many=True)
        return Response(serializer.data)
   
    elif request.method == 'POST':
        serializer = BooksSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def books_detail(request, pk):
    try:
        book = Books.objects.get(pk=pk)
    except Books.DoesNotExist:
        return Response(status = status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = BooksSerializer(book)
        return Response(serializer.data)
    
    
    elif request.method == 'PUT':
        serializer = BooksSerializer(book, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status= status.HTTP_201_CREATED)
        return Response(status = status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        book.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)
    
@api_view(['GET'])
def get_categories(request):
    categories = Categories.objects.all()
    serializer = CategoriesSerializer(categories, many= True)
    return Response(serializer.data)

@api_view(['GET'])
def get_category(request, pk):
    category = Categories.objects.get(pk=pk)
    serializer = CategoriesSerializer(category)
    return Response(serializer.data)

@api_view(['GET'])
def sort_books(request, pk):
    books = Books.objects.filter(categoryId = pk)
    serializer = BooksSerializer(books, many=True)
    return Response(serializer.data)
