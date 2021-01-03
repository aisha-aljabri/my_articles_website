from django.urls import path
from .views import *

urlpatterns = [
    path('api/articles', get_articles),
    path('api/articles/new', add_article, name='add_article'),
    path('api/articles/<int:id>', get_article, name='get_article'),
    path('api/articles/delete', delete_articles),
    path('api/users', get_Users),
    path('api/users/<email>', get_User),
    path('api/users/new', add_user, name='add_user')
]