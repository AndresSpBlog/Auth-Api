
FROM node:12.13.0
RUN apt-get update && apt-get -y upgrade

# Set environment variables
ENV appDir /app

# Set the work directory
RUN mkdir -p ${appDir}
WORKDIR ${appDir}

COPY package*.json ./

#install dev Dependencies
RUN if [ "$MODE" = "DEV" ]; \
	then npm install;  \
	else npm ci --only=production; \
	fi

COPY . .


#Expose the port
EXPOSE 3000
EXPOSE 9229

#CMD ["npm", "run", "build:start:prod"]