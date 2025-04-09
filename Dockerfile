FROM node:23-alpine

WORKDIR /src
COPY payRateCal.js validate.js /src/
RUN npm install --production

COPY . /src

EXPOSE 3000

CMD ["npm", "start"]
