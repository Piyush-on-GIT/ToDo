import sys
import mysql.connector

mydb = mysql.connector.connect(host="localhost", user="root", passwd="piyush", database="ToDo")
mycur = mydb.cursor()
mycur.execute("set SQL_SAFE_UPDATES = 0")
mycur.execute("select * from users")
res = mycur.fetchall()

nm = sys.argv[1]
dobt = sys.argv[2]
passd = sys.argv[3]

qry = "insert into users (Name, DOB, Password) values (%s, %s, %s)"
mycur.execute(qry, (nm, dobt, passd))
# signup(nm, dobt, passd)
mydb.commit()
