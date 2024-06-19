# Generated by Django 5.0.6 on 2024-06-19 18:46

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Round',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('round', models.CharField(max_length=16, unique=True, verbose_name='Ronda')),
            ],
            options={
                'verbose_name': 'Ronda',
                'verbose_name_plural': 'Rondas',
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('team', models.CharField(max_length=59, unique=True, verbose_name='Equipo')),
            ],
            options={
                'verbose_name': 'Equipo',
                'verbose_name_plural': 'Equipos',
            },
        ),
        migrations.CreateModel(
            name='Stadistic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amountMatches', models.IntegerField(verbose_name='Cantidad de partidos')),
                ('goals', models.IntegerField(verbose_name='Goles anotados')),
                ('goalsAgainst', models.IntegerField(verbose_name='Goles encajados')),
                ('win', models.IntegerField(verbose_name='Partidos ganados')),
                ('tie', models.IntegerField(verbose_name='Partidos empatados')),
                ('lose', models.IntegerField(verbose_name='Partidos perdidos')),
                ('penaltisShootout', models.IntegerField(verbose_name='Tandas de penaltis disputadas')),
                ('penaltisWinner', models.IntegerField(verbose_name='Tandas de penaltis ganadas')),
                ('penaltisLoser', models.IntegerField(verbose_name='Tandas de penaltis perdidas')),
                ('penaltisGoals', models.IntegerField(verbose_name='Goles anotados en tandas de penaltis')),
                ('penaltisGoalsAgainst', models.IntegerField(verbose_name='Goles encajados en tandas de penaltis')),
                ('team', models.ForeignKey(db_column='team', default='King of Europe', on_delete=django.db.models.deletion.CASCADE, related_name='stadistics_by_team', to='api.team', to_field='team', verbose_name='Equipo')),
            ],
            options={
                'verbose_name': 'Estadística',
                'verbose_name_plural': 'Estadísticas',
            },
        ),
        migrations.CreateModel(
            name='Match',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goalHome', models.IntegerField(verbose_name='Goles equipo local')),
                ('goalAway', models.IntegerField(verbose_name='Goles equipo visitante')),
                ('season', models.CharField(max_length=7, verbose_name='Temporada')),
                ('winner', models.CharField(max_length=59, verbose_name='Vencedor')),
                ('round', models.ForeignKey(db_column='round', default='final', on_delete=django.db.models.deletion.CASCADE, related_name='round_match', to='api.round', to_field='round', verbose_name='Temporada')),
                ('away', models.ForeignKey(db_column='away', default='Reims', on_delete=django.db.models.deletion.CASCADE, related_name='away_team', to='api.team', to_field='team', verbose_name='Equipo Local')),
                ('home', models.ForeignKey(db_column='home', default='King of Europe', on_delete=django.db.models.deletion.CASCADE, related_name='home_team', to='api.team', to_field='team', verbose_name='Equipo Local')),
            ],
            options={
                'verbose_name': 'Partido',
                'verbose_name_plural': 'Partidos',
            },
        ),
    ]
