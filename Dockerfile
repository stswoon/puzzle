FROM node:24.18.0-alpine3.24

WORKDIR /app
COPY package.json package-lock.json ./
COPY src src
RUN npm ci

EXPOSE ${PORT}
CMD ["node", "src/server.js"]

# docker build . -t puzzle
# docker run --rm --name twister -p 8081:8081 -e PORT=8081 puzzle
