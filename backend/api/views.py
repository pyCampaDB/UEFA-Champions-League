#from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.status import HTTP_400_BAD_REQUEST,HTTP_201_CREATED
from rest_framework.response import Response
from django.contrib.auth.models import User
from .models import Team, Round, Match, Stadistic,Penalty
from .serializers import TeamSerializer, RoundSerializer, MatchSerializer, StadisticSerializer,UserSerializer,PenaltySerializer
class TeamViewSet(ModelViewSet):
    queryset=Team.objects.all()
    serializer_class=TeamSerializer
class RoundViewSet(ModelViewSet):
    queryset=Round.objects.all()
    serializer_class=RoundSerializer
class MatchViewSet(ModelViewSet):
    queryset=Match.objects.all()
    serializer_class=MatchSerializer
class StadisticViewSet(ModelViewSet):
    queryset=Stadistic.objects.all()
    serializer_class=StadisticSerializer
class PenaltyViewSet(ModelViewSet):
    queryset=Penalty.objects.all()
    serializer_class=PenaltySerializer
class UserViewSet(ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer
class Register(APIView):
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        if not username or not password:
            return Response({"error": "Username and password are required"}, status=HTTP_400_BAD_REQUEST)
        if User.objects.filter(username=username).exists():
            return Response({"error": "Username already exists"}, status=HTTP_400_BAD_REQUEST)
        user = User.objects.create_user(username=username, password=password)
        return Response({"message": "User created successfully"}, status=HTTP_201_CREATED)