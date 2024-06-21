from MySQLdb import connect
from csv import reader
DB_NAME = 'championsleague'
DB_USER = 'root'
DB_PASSWORD = 'root'
DB_HOST = 'db'  
csv='champions_penaltis'
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
with open(CSV_FILE_PATH, 'r', newline='', encoding='utf-8') as f:
    reader = reader(f, delimiter=',')
    # Skips the first row if it contains column headers
    next(reader)  
    for row in reader:
        # insert each line of csv file
        cur.execute("INSERT INTO api_penalty (id,home, away, goalHome, goalAway, season, round, winner) VALUES (%s,%s,%s,%s,%s,%s,%s,%s)",(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7]))
        # Confirms the transaction and closes the connection
conn.commit()
cur.close()
conn.close()
print("Los datos se han importado correctamente desde el archivo CSV.")