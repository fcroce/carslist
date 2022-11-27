FROM node:16.18-alpine

WORKDIR /server

RUN apk add --no-cache tini

COPY . .

RUN npm ci

EXPOSE 8080

# Node does not respond properly to kernel signals when running as PID 1. Wrap the node process with a lightweight init system to forward signals.
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
ENTRYPOINT ["/sbin/tini", "--"]

CMD npm run start