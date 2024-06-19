from MySQLdb import connect, IntegrityError
from csv import reader
DB_NAME = 'championsleague'
DB_USER = 'root'
DB_PASSWORD = 'root'
DB_HOST = 'db'  
csv='champions_matches'
CSV_FILE = f'{csv}.csv'
CSV_FILE_PATH=f'/code/assets/{CSV_FILE}'
conn = connect(
    db=DB_NAME,
    user=DB_USER,
    passwd=DB_PASSWORD,
    host=DB_HOST
)
cur = conn.cursor()
# if not exists the Table TABLE_NAME
# Opens the CSV file and loads the data into the database table
"""with open(CSV_FILE_PATH, 'r', newline='', encoding='utf-8') as f:
    reader = reader(f, delimiter=',')
    # Skips the first row if it contains column headers
    next(reader)  
    for row in reader:
        # insert each line of csv file
        cur.execute("INSERT INTO api_match (home, away, goalHome, goalAway, season, round, winner) VALUES (%s,%s,%s,%s,%s,%s,%s)",(row[1],row[2],row[3],row[4],row[5],row[6],row[7]))
        # Confirms the transaction and closes the connection
conn.commit()
cur.close()
conn.close()"""
with open(CSV_FILE_PATH, 'r', newline='', encoding='utf-8') as f:
    reader = reader(f)
    next(reader)  # Omitir el encabezado si lo tiene
    for index, row in enumerate(reader, start=2):  # start=2 para contar desde la línea 2 (asumiendo que la primera línea es el encabezado)
        try:
            cur.execute("INSERT INTO api_match (home, away, goalHome, goalAway, season, round, winner) VALUES (%s,%s,%s,%s,%s,%s,%s)", (row[1], row[2], row[3], row[4], row[5], row[6], row[7]))
            conn.commit()
        except IntegrityError as e:
            print(f"Error en la línea {index}: {e}")
            conn.rollback()  # Deshacer la transacción si hay un error

cur.close()
conn.close()

print("Los datos se han importado correctamente desde el archivo CSV.")