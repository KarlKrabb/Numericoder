FROM node:17.5.0

#Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#installing depenancies
COPY package*.json .
COPY package-lock.json .
RUN npm install

#Copy the source files
COPY . .

#Build app
RUN npm run build
EXPOSE 3000

#Running the app
CMD ["npm", "start"]