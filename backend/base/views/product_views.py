from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from base.models import Product
from base.serializers import ProductSerializer
from rest_framework import status


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = get_object_or_404(Product, id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getCategories(request):
    categories = Product.objects.exclude(category='wishlist').values_list(
        'category', flat=True).distinct()
    return Response(set(categories))


@api_view(['GET'])
def getCategoryProducts(request, category):
    if category != "undefined":
        products = Product.objects.filter(category=category)
    else:
        products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def addWishListProduct(request):
    data = request.data
    user = request.user

    product = Product.objects.create(
        user=user,
        name=data['name'],
        image=data['image'],
        brand=data['brand'],
        description=data['description'],
        price=0,
        category='wishlist'
    )
    serializer = ProductSerializer(instance=product, many=False)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def getWishListProducts(request, pk):
    product = get_object_or_404(
        Product.objects.filter(category='wishlist'), id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
