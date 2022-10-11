FROM mcr.microsoft.com/playwright:v1.22.0-focal

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN useradd -m drennan

RUN chown -R drennan /app

USER drennan

CMD ["npm","run","build","npm","start"]