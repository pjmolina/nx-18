#!/bin/sh
nx build nxapp1 && \
  docker build -t nxapp1:1.0.0 .
