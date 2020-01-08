import sys
import mysql.connector as sql

db = sql.connect(host="localhost", user="root", passwd="piyush", database="ToDo")
cur = db.cursor()
cur.execute("select * from users")
res = cur.fetchall()
print(res)
sys.stdout.flush()
