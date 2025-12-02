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
│   │   ├── \_layout.tsx      # Root layout
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
yarn dev                            # Start dev server
yarn dev:clear                      # Clear cache
yarn lint                           # Run ESLint
yarn type-check                     # TypeScript check
eas build --platform android/ios    # Cloud build
eas update                          # OTA update (no store release needed)
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

## Quick start (Docker Compose)
Use the provided `docker-compose.yml` to build and run the development container (service name: `fina-dev`). Run these commands from PowerShell in the repository root:

```powershell
cd 'c:\Users\eomid\Desktop\Fina'

# Build the image (or re-build after Dockerfile changes)
docker compose build

# Start the container in the background
docker compose up -d

# View live logs
docker compose logs -f fina

# Open a shell inside the running container
docker compose exec fina bash

# Inside the container
yarn install
yarn dev
```

Shortcuts and cleanup:

```powershell
# Rebuild the image without cache
docker compose build --no-cache

# Stop and remove containers
docker compose down
```

Notes:
- The container includes the new `expo` CLI and Node, but does NOT include Android emulators or an ADB server. Use a host emulator or a physical device and Expo tunneling if needed.
- Forwarded ports used by the compose service: `19000`, `19001`, `19002` (Metro, devtools). Adjust as needed in `docker-compose.yml`.

