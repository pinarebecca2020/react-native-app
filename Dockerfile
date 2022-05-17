
FROM node:latest

RUN mkdir -p /app/src
RUN \
  apt-get update && \
  apt-get install -y ruby

WORKDIR /app/src



