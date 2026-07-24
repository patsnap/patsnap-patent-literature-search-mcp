FROM node:22-bookworm-slim

WORKDIR /app

COPY package.json ./
RUN npm install --omit=dev --ignore-scripts

COPY index.js ./

CMD ["node", "index.js"]
