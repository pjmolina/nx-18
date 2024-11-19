#!/bin/sh


docker rm -f web0 &&
  docker run --name web0 -p 8080:80 -d nxapp1:1.0.0
