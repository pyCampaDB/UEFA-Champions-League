from rest_framework.serializers import ModelSerializer
from django.contrib.auth.models import User
from .models import Team, Round, Match, Stadistic,Penalty
class TeamSerializer(ModelSerializer):
    class Meta:
        model=Team
        fields=('team',)
class RoundSerializer(ModelSerializer):
    class Meta:
        model=Round
        fields=('round',)
class MatchSerializer(ModelSerializer):
    class Meta:
        model=Match
        fields='__all__'
class StadisticSerializer(ModelSerializer):
    class Meta:
        model=Stadistic
        fields='__all__'
class PenaltySerializer(ModelSerializer):
    class Meta:
        model=Penalty
        fields='__all__'
class UserSerializer(ModelSerializer):
    class Meta:
        model=User
        fields='__all__'