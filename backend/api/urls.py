from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TeamViewSet, RoundViewSet, MatchViewSet, StadisticViewSet, UserViewSet
router=DefaultRouter()
router.register(r'teams', TeamViewSet)
router.register(r'rounds', RoundViewSet)
router.register(r'matches', MatchViewSet)
router.register(r'stadistics', StadisticViewSet)
router.register(r'users', UserViewSet)
urlpatterns = [
    path('', include(router.urls)),
]
