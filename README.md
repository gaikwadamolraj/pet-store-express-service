# CRUD-ES6-nodejs-express-api
A simple owner and pet store REST microservice

# Sendit API Standards

- [Setup Instructions](#instructions)
- [RESTful URLs](#restful-urls)

## Setup Instructions


Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm run start
```

Startup the Server in debug mode:

```sh
$ npm run watch
```

Execute unit test cases:

```sh
$ npm run test:unit
```

Execute integration test cases:

```sh
$ npm run test:component
```
 Test Reports path:

```
/test/reports
```

## RESTful URLs

- List all owners:
  - GET http://localhost:3000/api/v1/owners
- Query one owner by id:
  - GET http://localhost:3000/api/v1/owners/:ownerId
- Create a owner:
  - POST http://localhost:3000/api/v1/owners
- Update a owner:
  - PUT http://localhost:3000/api/v1/owners/:ownerId
- Delete a owner:
  - DELETE http://localhost:3000/api/v1/owners/:ownerId

- List all owner pets:
  - GET http://localhost:3000/api/v1/owners/:ownerId/pets
- Query one pet of owner by id:
  - GET http://localhost:3000/api/v1/owners/:ownerId/pets/:petId
- Create a owners pet:
  - POST http://localhost:3000/api/v1/owners/:ownerId/pets/:petId
- Update a owners pet:
  - PUT http://localhost:3000/api/v1/owners/:ownerId/pets/:petId
- Delete a owners pet:
  - DELETE http://localhost:3000/api/v1/owners/:ownerId/pets/:petId

- List all owner and associated pets:
  - GET http://localhost:3000/api/v1/all