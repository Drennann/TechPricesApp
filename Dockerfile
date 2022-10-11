FROM node:alpine-14

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["npm","run","build", "npm", "start"]