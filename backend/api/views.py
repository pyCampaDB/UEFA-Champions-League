#from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
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