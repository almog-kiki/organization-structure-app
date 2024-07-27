
How to run:

1. Backend( NodeJS )
	0. npm install 
	1. run mysql service on local machine
	2. create DB: `npm run create-db`
	3. create tables: `npm run migrate`
	4. add data to DB:`npm run seed`
	5. npm start

2. Frontend( Angular ):
	0. npm install
	1. npm run start 



- Frontend troubleshooting:

https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
export NODE_OPTIONS=--openssl-legacy-provider
npm start
