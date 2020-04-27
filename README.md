<h1 align="center">
NestJS, GraphQL Boilerplate
</h1>
  
<p align="center">
  GraphQL Boilerplate made using NestJS with MongoDB, TypeScript, Docker and command query responsibility segregation (CQRS) design pattern.
</p>

### Requirements

| Store and Cache                                | Stack and frameworks                            | Deployment                        |
| ---------------------------------------------- | ----------------------------------------------- | --------------------------------- |
| [MongoDB (Database)](https://www.mongodb.com/) | [NestJS (Server Framework)](https://nestjs.com) | [Docker](https://www.docker.com/) |
|                                                | [NodeJS (System runtime)](https://nodejs.org)   |                                   |
|                                                | [Typescript](https://www.typescriptlang.org)    |                                   |

### Installation

```bash
$ make init
```

### Running the app

```bash
$ make start
```

### Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## License

This project is [MIT licensed](LICENSE).
