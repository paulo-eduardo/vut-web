FROM node:slim as common
WORKDIR /fake-backend
COPY package.json /fake-backend/
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]