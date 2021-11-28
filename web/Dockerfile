FROM node:14-alpine AS builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --silent


COPY . .

EXPOSE 3000

RUN npm run build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]