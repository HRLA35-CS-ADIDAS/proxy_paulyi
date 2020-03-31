FROM node:12.13.1

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start-main" ]