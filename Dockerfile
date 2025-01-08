# Frontend Dockerfile for ureg-exchange-rates

FROM node:20
WORKDIR /usr/src/app

ARG user
ARG uid

# Install Dependencies
# COPY . /usr/src/app

COPY --chown=$user:www-data . /usr/src/app
RUN npm install
# RUN npm install -g serve
RUN npm run build

EXPOSE 3000
# CMD [ "serve", "-s", "build" ]
CMD ["npm", "start"]
