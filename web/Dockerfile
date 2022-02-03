FROM node:11-alpine AS client_builder
WORKDIR /portfolio

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
COPY . .

RUN npm run build

# Bundle static assets with nginx
FROM nginx

# Copy built assets from builder
COPY --from=client_builder /portfolio/build /usr/share/nginx/html
# Expose port
EXPOSE 80
