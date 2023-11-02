include .env

init_db:
	psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d postgres -f ./database/migration/init.sql
	psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d ${DB_DATABASE} -f ./database/migration/create.sql
	psql -h ${DB_HOST} -p ${DB_PORT} -U ${DB_USER} -d ${DB_DATABASE} -f ./database/migration/insert.sql
