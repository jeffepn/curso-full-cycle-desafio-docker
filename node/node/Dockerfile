FROM node:15

ENV DOCKERIZE_VERSION v0.7.0

WORKDIR /usr/src/app

COPY . .

RUN apt-get install -y wget
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin
RUN apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

RUN npm i

RUN chown -R www-data:www-data /usr/src/app

CMD [ "node", "index.js"]