FROM mcr.microsoft.com/playwright:v1.24.0-focal

COPY package.json package-lock.json ./

RUN npm i

COPY . .

CMD ["npm","run","build", "npm", "start"]