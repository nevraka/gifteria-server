Running Mongo DB on local

```
mongod
```

Loading envıronment variables

```
source .env
```

Running the application

```
npm run dev
```

Client application is built and copied from the React app (in client app folder).

```
npm run build
cp -r build/* ../server/public/
```

Deploying to Heroku

```
git push heroku main
```
