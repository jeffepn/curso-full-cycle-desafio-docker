FROM node:15

WORKDIR /usr/src/app

COPY . .

RUN npm i

RUN chown -R www-data:www-data /usr/src/app

CMD [ "node", "index.js"]