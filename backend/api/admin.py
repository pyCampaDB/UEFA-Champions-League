from django.contrib.admin import site
from .models import Team, Round, Match, Stadistic
# Register your models here.
site.register(Team);site.register(Round);site.register(Match);site.register(Stadistic)