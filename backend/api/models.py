from django.db.models import Model, CharField, ForeignKey, IntegerField,CASCADE

# Create your models here.
class Team (Model):
    team = CharField(verbose_name='Equipo', max_length=59, unique=True)
    def __str__(self) -> str:
        return f'{self.team}'
    class Meta:
        verbose_name='Equipo'
        verbose_name_plural='Equipos'

class Round (Model):
    round = CharField(verbose_name='Ronda', unique=True, max_length=16)
    class Meta:
        verbose_name='Ronda'
        verbose_name_plural='Rondas'
    def __str__(self) -> str:
        return f'{self.round}'
class Match (Model):
    home = ForeignKey(Team,verbose_name='Equipo Local', on_delete=CASCADE, db_column='home', to_field='team', default='King of Europe', related_name='home_team')
    away = ForeignKey(Team,verbose_name='Equipo Visitante', on_delete=CASCADE, db_column='away', to_field='team', default='Reims', related_name='away_team')
    goalHome = IntegerField(verbose_name='Goles equipo local')
    goalAway = IntegerField(verbose_name='Goles equipo visitante')
    season = CharField(verbose_name='Temporada', max_length=7)
    round = ForeignKey(Round, verbose_name='Temporada', on_delete=CASCADE, db_column='round', to_field='round', default='final', related_name='round_match')
    winner = CharField(verbose_name='Vencedor', max_length=59)
    class Meta:
        verbose_name='Partido'
        verbose_name_plural='Partidos'
    def __str__(self) -> str:
        return f'{self.home} - {self.away}. Temporada: {self.season}'
class Stadistic (Model):
    team = ForeignKey(Team, verbose_name='Equipo', on_delete=CASCADE, db_column='team', to_field='team', related_name='stadistics_by_team', default='King of Europe')
    amountMatches = IntegerField(verbose_name='Cantidad de partidos')
    goals = IntegerField(verbose_name='Goles anotados')
    goalsAgainst = IntegerField(verbose_name='Goles encajados')
    win = IntegerField(verbose_name='Partidos ganados')
    tie = IntegerField(verbose_name='Partidos empatados')
    lose = IntegerField(verbose_name='Partidos perdidos')
    penaltisShootout= IntegerField(verbose_name='Tandas de penaltis disputadas')
    penaltisWinner = IntegerField(verbose_name='Tandas de penaltis ganadas')
    penaltisLoser = IntegerField(verbose_name='Tandas de penaltis perdidas')
    penaltisGoals = IntegerField(verbose_name='Goles anotados en tandas de penaltis')
    penaltisGoalsAgainst = IntegerField(verbose_name='Goles encajados en tandas de penaltis')
    class Meta:
        verbose_name='Estadística'
        verbose_name_plural='Estadísticas'
    def __str__(self) -> str:
        return f'{self.team}'
class Penalty (Model):
    home = ForeignKey(Team,verbose_name='Equipo Local', on_delete=CASCADE, db_column='home', to_field='team', default='King of Europe', related_name='home_team_penaltis')
    away = ForeignKey(Team,verbose_name='Equipo Visitante', on_delete=CASCADE, db_column='away', to_field='team', default='Reims', related_name='away_team_penaltis')
    goalHome = IntegerField(verbose_name='Goles equipo local')
    goalAway = IntegerField(verbose_name='Goles equipo visitante')
    season = CharField(verbose_name='Temporada', max_length=7)
    round = ForeignKey(Round, verbose_name='Temporada', on_delete=CASCADE, db_column='round', to_field='round', default='final', related_name='round_penaltis')
    winner = CharField(verbose_name='Vencedor', max_length=59)
    class Meta:
        verbose_name='Tanda de penaltis'
        verbose_name_plural='Tandas de penaltis'
    def __str__(self) -> str:
        return f'{self.home} - {self.away}. Temporada: {self.season}'
