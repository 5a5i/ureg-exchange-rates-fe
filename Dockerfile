# Frontend Dockerfile for ureg-exchange-rates

FROM node:20
WORKDIR /usr/src/app

# Install Dependencies
COPY . /usr/src/app
RUN npm install && npm run build

EXPOSE 3000
CMD ["npm", "start"]
