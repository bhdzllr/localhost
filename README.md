# localhost #

A local web server with gulp and a "docker-compose.yaml" for a local LEMP stack with docker.


## Getting started with gulp ##

Root folder for web server is "www". Place files in this folder. Run web server from command line:

```bash
gulp
```

The server is then available with the address `localhost:3000` from your browser.


## Getting started with Docker ##

Go into folder "docker-lemp" and run

```bash
docker-compose up
```

More information about Docker LEMP stack see files "docker-lemp/docker-compose.yaml" and "docker-lemp/nginx/default.conf".
