
# TODO NestJS Backend

## Quick Start

```bash
cp .env.example .env
npm install
npm run start:dev
```

Runs on `http://localhost:$PORT` (default 4000).

### REST Endpoints
- POST `/auth/signup` `{ email, password }` -> `{ access_token }`
- POST `/auth/signin` `{ email, password }` -> `{ access_token }`
- GET `/todos` (Bearer) -> list
- POST `/todos` (Bearer) `{ title }` -> created
- PATCH `/todos/:id` (Bearer) `{ title?, completed? }` -> updated
- DELETE `/todos/:id` (Bearer) -> `{ success: true }`
