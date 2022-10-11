FROM mcr.microsoft.com/playwright:v1.22.0-focal

WORKDIR /app

COPY package.json package-lock.json ./

COPY frontend/package.json frontend/package-lock.json .frontend/

RUN npm i

RUN npm run build

COPY . .

RUN useradd -m drennan

RUN chown -R drennan /app

USER drennan

CMD ["node", "app/backend/index.js"]