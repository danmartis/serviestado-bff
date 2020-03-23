FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm run build
RUN ls -l
RUN cp -a src/app/mock-data  dist/app/mock-data


EXPOSE 8080
CMD [ "npm", "start" ]