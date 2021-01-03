from .models import *
from .serializer import ArticleSerialiezer, UserSerialiezer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404


# //viewsets.ModelViewSet
# class ArticleViewSet(APIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerialiezer


# Article

@api_view(['POST'])
def add_article(request):
    serializer = ArticleSerialiezer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def get_articles(request):
    data = Article.objects.all()
    print(data)
    serializer = ArticleSerialiezer(data, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_article(request, id):
    data = get_object_or_404(Article, pk=id)
    serializer = ArticleSerialiezer(data)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_articles(request):
    data = Article.objects.all()
    data.delete()
    return Response('Successfully deleted the record!', status=status.HTTP_200_OK)



# User
@api_view(['GET'])
def get_Users(request):
    data = User.objects.all()
    print(data)
    serializer = UserSerialiezer(data, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

    
@api_view(['GET'])
def get_User(request, email):
    data = get_object_or_404(User, pk=email)
    serializer = UserSerialiezer(data)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def add_user(request):
    serializer = UserSerialiezer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# @api_view(['DELETE'])
# def delete_task(request, id):
#     data = get_object_or_404(Task, pk=id)
#     data.delete()
#     return Response('Successfully deleted the record!', status=status.HTTP_200_OK)