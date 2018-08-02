FROM node:carbon

WORKDIR /usr/src/app

COPY package.json .

COPY package-lock.json .

RUN npm config set proxy http://thd-svr-proxy-qa.homedepot.com:7070 \
    && npm config set registry https://npm.artifactory.homedepot.com/artifactory/api/npm/npm \
    && npm install

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm","start"]