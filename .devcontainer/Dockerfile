FROM mcr.microsoft.com/devcontainers/javascript-node:0-20-bookworm

#Install dependencies for Android development (Java + Android SDK + cmdline-tools)
ENV ANDROID_HOME=/opt/android-sdk
ENV PATH=${PATH}:${ANDROID_HOME}/cmdline-tools/latest/bin:${ANDROID_HOME}/platform-tools

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get install -y --no-install-recommends \
        openjdk-17-jdk \
        unzip \
        wget \
    && rm -rf /var/lib/apt/lists/*

# Install Android Command Line Tools
RUN mkdir -p ${ANDROID_HOME}/cmdline-tools \
    && wget -q https://dl.google.com/android/repository/commandlinetools-linux-11076708_latest.zip -O cmdline.zip \
    && unzip cmdline.zip && mv cmdline-tools ${ANDROID_HOME}/cmdline-tools/latest \
    && rm cmdline.zip

# Accept licenses and install essential platforms
RUN yes | sdkmanager --sdk_root=${ANDROID_HOME} --licenses > /dev/null
RUN sdkmanager --sdk_root=${ANDROID_HOME} \
    "platform-tools" \
    "platforms;android-34" \
    "build-tools;34.0.0"

# Install Expo CLI and pnpm globally
RUN npm install -g expo-cli pnpm

# User node (already exists)
USER node