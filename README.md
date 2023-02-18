# Word Count - Front
    
This project is the front of [Word Count - Back](https://github.com/alynnefs/word_count_back/). The detailed information is described there.

## Running with Docker

To create the docker image, run the following command in the project root:

```
docker build -t cw-front .
```

The result should be

![](https://i.imgur.com/fBR9Rws.png)

After created, run the container with:

```
docker run -it -p 8080:8080 --rm --name cw-front-1 cw-front
```

The output should look similar to this:

![](https://i.imgur.com/dZXZbIz.png)

Since the server is "open", it is not so necessary to check the container. But if you want to look anyway, just use the `docker container ls` command. The output should look something like this:

![](https://i.imgur.com/Ft9u6v3.png)

## Running locally

## Specifications used in development
- NPM: 9.2.0
- Vue/cli: 5.0.8

## How to install

```sh
npm install
```

### Running locally

```sh
npm run dev
```

### How to compile for production

```sh
npm run build
```
