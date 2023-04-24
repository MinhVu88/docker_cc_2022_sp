# the 1st layer of the Docker image
FROM node:17-alpine

RUN npm install -g nodemon

WORKDIR /app
 
COPY package.json .

RUN npm install

COPY . .

# required for docker desktop port mapping
EXPOSE 4000 

# CMD ["node", "app.js"]
CMD [ "npm", "run", "dev" ]