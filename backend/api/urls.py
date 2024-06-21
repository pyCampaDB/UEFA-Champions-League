from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, RoundViewSet, MatchViewSet, StadisticViewSet, UserViewSet, PenaltyViewSet
router=DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'rounds', RoundViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'stadistics', StadisticViewSet)
router.register(r'users', UserViewSet)
router.register(r'penaltis', PenaltyViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
