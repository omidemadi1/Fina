# Professional React Native Template — 2025 Standard

A production-ready, clean, scalable React Native starter using the exact stack that top companies and teams use in 2025.

## Tech Stack (2025 Gold Standard)
- Expo SDK 51+ (EAS Build \& EAS Update)
- Expo Router (file-based routing like Next.js)
- TypeScript (strict mode)
- NativeWind v4 (real Tailwind CSS in React Native)
- Zustand (lightweight state management)
- TanStack Query v5 (React Query) – complete server-state handling
- Zod + React Hook Form (forms + validation)
- MMKV (fastest storage)
- Reanimated 3 + Gesture Handler
- FlashList (lag-free long lists)
- Husky + lint-staged + commitlint (code quality on every commit)

## Folder Structure
```
my-app/

├── src/
│   ├── app/                  # Expo Router pages \& navigation
│   │   ├── \_layout.tsx       # Root layout
│   │   ├── (tabs)/           # Bottom tabs (optional)
│   │   ├── auth/
│   │   └── index.tsx         # Splash / entry screen
│   │
│   ├── features/             # One complete folder per feature (the heart of the app)
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   ├── hooks/
│   │   │   ├── screens/
│   │   │   ├── api/
│   │   │   ├── store/        # Zustand slice
│   │   │   └── types.ts
│   │   ├── profile/
│   │   ├── wallet/
│   │   └── home/
│   │
│   ├── shared/
│   │   ├── ui/               # Reusable UI (Button, Input, Card…)
│   │   ├── lib/              # Utilities \& helpers
│   │   ├── hooks/            # Custom hooks
│   │   ├── api/              # Axios + TanStack Query client
│   │   ├── navigation/
│   │   ├── constants/
│   │   └── config/
│   │
│   ├── entities/             # Shared domain models (User, Product…)
│   └── assets/               # Images, icons, fonts
│

├── App.tsx                   # Main entry point
├── app.json
├── babel.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
├── .env / .env.example
└── husky/                    # Auto-created after `yarn prepare`

```

## Getting Started
```bash
git clone https://github.com/yourname/my-awesome-app.git
cd my-awesome-app

# Install dependencies (yarn or pnpm recommended)
yarn install
# or
pnpm install

# Setup git hooks
yarn prepare

# Run the app
yarn dev          # expo start
yarn ios
yarn android

```

## Scripts
```bash
yarn dev            # Start dev server
yarn dev:clear      # Clear cache
yarn lint           # Run ESLint
yarn type-check     # TypeScript check
eas build --platform android/ios   # Cloud build
eas update          # OTA update (no store release needed)

```

## Adding a New Feature (e.g., shop)
```bash
mkdir -p src/features/shop/{components,hooks,screens,api,store}

touch src/features/shop/types.ts
```

→ Everything lives in its own folder. Deleting a feature = deleting one folder.

## Environment Variables (.env.example)
```env
API\_BASE\_URL=https://api.example.com
SENTRY\_DSN=your-sentry-dsn
APP\_ENV=development
```

Copy → create `.env` and fill real values.


## Docker & Dev Container (VS Code)

You can use a Docker-based development container (Dev Container) for a reproducible dev environment.

Files added:

- `.devcontainer/Dockerfile` — base image with Node, yarn and `expo-cli` installed.
- `.devcontainer/devcontainer.json` — VS Code devcontainer config.
- `docker-compose.dev.yml` — helper to run the container via Docker Compose.

Quick start (VS Code):

1. Install the Remote - Containers extension in VS Code.
2. Open the `Fina` folder in VS Code.
3. Press F1 -> `Dev Containers: Reopen in Container`.

Quick start (Docker Compose):

```powershell
cd 'c:\Users\eomid\Desktop\Fina'
docker compose -f docker-compose.dev.yml build
docker compose -f docker-compose.dev.yml up -d
docker compose -f docker-compose.dev.yml exec fina-dev bash
# inside container run:
yarn install
yarn dev
```

Notes:
- The devcontainer installs `expo-cli` and Node. Android emulators are not included inside the container — use a local emulator or a physical device and use Expo tunneling if needed.
- Forwarded ports: `19000`, `19001`, `19002` (Metro, devtools). Adjust as needed.

