FROM node:11-alpine AS client_builder
WORKDIR /portfolio

COPY package*.json /portfolio/
RUN npm install --production

COPY ./ /portfolio/
ARG DOMAIN
ARG CLIENT_ID
ARG AUDIENCE
ENV REACT_APP_AUTH0_CLIENT_ID=${CLIENT_ID}
ENV REACT_APP_AUTH0_DOMAIN=${DOMAIN}
ENV REACT_APP_AUTH0_AUDIENCE=${AUDIENCE}

RUN npm run build

# Bundle static assets with nginx
FROM nginx

# Copy built assets from builder
COPY --from=client_builder /portfolio/build /usr/share/nginx/html
# Expose port
EXPOSE 80
