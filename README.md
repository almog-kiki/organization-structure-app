
How to run:

1. Backend( NodeJS )
   
	1. npm install 
	2. run mysql service on local machine
	3. create DB: `npm run create-db`
	4. create tables: `npm run migrate`
	5. add data to DB:`npm run seed`
	6. npm start

3. Frontend( Angular ):
   
	1. npm install
	2. npm run start 



- Frontend troubleshooting:

https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported
export NODE_OPTIONS=--openssl-legacy-provider
npm start
