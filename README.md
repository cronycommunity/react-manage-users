# react-manage-users

This is a simple user-manage project. It is created by using react-nodejs.

---------------------------------------------------

create your database and a "users" table in Postgresql 

users table must have these columns:

id: INTEGER, IDENTITIY:ALWAYS, INCREMENT:1

customer_number:INTEGER

first_name: STRING

last_name: STRING

user_name: STRING

email: STRING

date_of_birth: DATE

password: STRING

last_login: DATE

---------------------------------------------------
create your own .env file for Postgresql connection and write your datas in quotes

DB_USERNAME=""

DB_PASSWORD=""

DB_HOSTNAME=""

DB_PORT=""

DB_NAME=""

---------------------------------------------------
intall dependencies with npm install

start server: npm start

server works on: http://localhost:4000/


start frontend: cd views 

                npm start

users app works on: http://localhost:3000/