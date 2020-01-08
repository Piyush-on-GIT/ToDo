import sys
import mysql.connector

db = mysql.connector.connect(host="localhost", user="root", passwd="piyush", database="ToDo")
cur = db.cursor()
cur.execute("select * from Users")
res = cur.fetchall()

nm = sys.argv[1]
passd = sys.argv[2]

for i in res:
    if i[0] == nm:
        if passd == i[2]:
            print(0) # Successfully Login
            sys.stdout.flush()
            break
        else:
            print(1) # Error code for wrong password.
            break
            sys.stdout.flush()
else:
    # print("User not found. Go back to sign up page.")
    print(2) # User not found.
    sys.stdout.flush()
