from django.urls import path
from base.views import product_views as views

urlpatterns = [

    path('', views.getProducts, name="products"),
    path('add/', views.addWishListProduct, name="wishlist-products"),
    path('wishlist/', views.getWishListProducts, name="wishlist-products"),
    path('categories/', views.getCategories, name="categories"),
    path('<str:pk>/', views.getProduct, name="product"),
    path('category/<str:category>/',
         views.getCategoryProducts, name='category-products'),
]
