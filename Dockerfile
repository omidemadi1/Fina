FROM mcr.microsoft.com/devcontainers/typescript-node:22-bookworm

# Install small set of general tools (kept minimal)
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        unzip \
        wget \
        curl \
    && rm -rf /var/lib/apt/lists/*

# Install the new Expo CLI and pnpm globally
RUN npm install -g expo pnpm

# Switch to non-root user provided by the base image
USER node