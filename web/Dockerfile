FROM node:17-alpine AS client_builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx

# Copy built assets from builder
COPY --from=client_builder /app/build /usr/share/nginx/html
# Expose port
EXPOSE 80
