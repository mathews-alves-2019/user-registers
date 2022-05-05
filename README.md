# user-register

## Description
This is a node project for registering users and their addresses. I used the principles of clean-architeture. This API was made with Express, TypeORM, swagger, Jest and JWT.

>## Getting Started
## Installation

1. Clone the repo

   ```sh
   git clone https://github.com/mathews-alves-2019/user-registers
   ```
2. Install dependencies

   ```sh
   yarn add
   ```

3. You need to create a database using PostgreSQL. If you want to create an local database you can access this link https://www.postgresql.org/download/ and get the postgres installer.
After that you need update the file ormconfig.env e set the following fields with you connection configuration:

   ```sh
    TYPEORM_USERNAME=yourusername
    TYPEORM_PASSWORD=yourpassword
    TYPEORM_HOST=yourhost
    TYPEORM_PORT=yourport
    TYPEORM_CONNECTION=yourconnection
    TYPEORM_DATABASE=youdatabasename
   ```

    If you want a different database connection for teste use the following part of the ormconfig.env file to set:

    ```sh
    NODE_ENV=development
    TYPEORM_DATABASE=dbfordev

    NODE_ENV=test
    TYPEORM_DATABASE=dbfortest
   ```

4. Run the following command to create the tables:

   ```sh
   yarn typeorm migration:run
   ```
    **If you get an error with uuid_generate_v4() function, use this query on you database**: 
    ```
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    ```
    Or see this link https://stackoverflow.com/questions/12505158/generating-a-uuid-in-postgres-for-insert-statement.
5. To run the application, run the following command:
   ```sh
   yarn dev
   ```

6. To run the tests, run the following command:
   ```sh
   yarn dev
   ```

7. To access the swagger use this link: http://localhost:8080/api-docs

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Recommendation -->
> ## Recommendation

You can use the Insomnia app to do the requests to API or any other app you like. See the insomnia json and import him to your Insomnia application.

<p align="right">(<a href="#top">back to top</a>)</p>

> ## Principles
* Single Responsibility Principle (SRP)
* Separation of Concerns (SOC)
* Don't Repeat Yourself (DRY)
* Keep It Simple, Silly (KISS)

> ## Design Patterns
* Factory
* Adapter
* Singleton
* Dependency Injection
* Abstract Server
* Decorator

> ## Bibliotecas e Ferramentas
* Typescript
* Yarn
* Git
* Jest
* Swagger
* Bcrypt
* JsonWebToken
* Validator
* Express
* Supertest
* Husky
* Lint Staged
* Eslint
* Nodemon
* TypeORM
* pg