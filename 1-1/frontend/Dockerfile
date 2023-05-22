FROM node:19-alpine
WORKDIR /usr/src/app
COPY ./package* /usr/src/app/
RUN "npm install"
COPY . /usr/src/app/
CMD ["npm","run","dev"]