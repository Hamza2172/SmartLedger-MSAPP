# User Service REST API

Node.js · Express · TypeScript · Mongoose · JWT · Socket.io

---

## 📁 Project Structure

```
src/
├── app.ts                          # Entry point, DB connection, server bootstrap
├── config/
│   └── database.ts                 # MongoDB connection (if separated)
├── types/
│   └── express.d.ts                # Extends Express Request with req.user
├── models/
│   └── user.model.ts               # Mongoose schema & IUser interface
├── repositories/
│   └── user.repository.ts          # All DB queries — only layer touching the model
├── services/
│   ├── user.service.ts             # User business logic
│   └── auth.service.ts             # Login & JWT logic
├── controllers/
│   ├── user.controller.ts          # Handles req/res for user routes
│   └── auth.controller.ts          # Handles req/res for auth routes
├── middlewares/
│   └── auth.middleware.ts          # authMiddleware (JWT verify) + isAdmin (role guard)
├── routes/
│   ├── user.routes.ts              # /api/users endpoints
│   └── auth.routes.ts              # /api/auth endpoints
└── socket/
    └── socket.ts                   # Socket.io init + notifyAdmins()
```

---

## 🔄 Request Flow

```
Request
  → Route
  → authMiddleware  (verifies JWT → attaches req.user)
  → isAdmin         (checks role === "ADMIN")
  → Controller      (extracts req data → calls service)
  → Service         (business logic → calls repository)
  → Repository      (DB query → calls model)
  → Model
  → MongoDB
```

---

## ⚙️ Setup

### 1. Install dependencies

```bash
npm install express mongoose jsonwebtoken bcryptjs dotenv socket.io
npm install -D typescript ts-node-dev @types/express @types/jsonwebtoken @types/bcryptjs @types/node
```

### 2. Create `.env`

```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/user-service
JWT_SECRET=your_secret_key
```

### 3. Generate a strong JWT secret

```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### 4. Add scripts to `package.json`

```json
"scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/app.ts",
    "build": "tsc",
    "start": "node dist/app.js"
}
```

### 5. Run

```bash
# Development
npm run dev

# Production
npm run build
npm start
```

On first startup, the server automatically creates an admin user:

```
email:    admin@example.com
password: admin123
```

---

## 🔐 Auth Flow

```
POST /api/auth/login  →  returns JWT token
```

Use the token in all protected requests:

```
Authorization: Bearer <token>
```

---

## 📋 API Endpoints

### Auth

| Method | Endpoint        | Access | Description     |
| ------ | --------------- | ------ | --------------- |
| POST   | /api/auth/login | Public | Login & get JWT |

### Users

| Method | Endpoint            | Access | Description               |
| ------ | ------------------- | ------ | ------------------------- |
| GET    | /api/users          | Any    | Get all users (paginated) |
| GET    | /api/users/:id      | Any    | Get user by ID            |
| POST   | /api/users          | Admin  | Create new user           |
| PATCH  | /api/users/:id      | Admin  | Partial update            |
| PUT    | /api/users/:id      | Admin  | Full replace              |
| DELETE | /api/users/:id/soft | Admin  | Soft delete               |
| DELETE | /api/users/:id      | Admin  | Hard delete               |

---

## 🧪 Testing in Postman

### Step 1 — Login

```
POST http://localhost:3000/api/auth/login
Body:
{
    "email": "admin@example.com",
    "password": "admin123"
}
```

Copy the `token` from the response.

### Step 2 — Authorize

In Postman → **Authorization tab** → **Bearer Token** → paste token.

### Step 3 — Create a user

```
POST http://localhost:3000/api/users
Body:
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "123456",
    "phoneNumber": "01012345678",
    "dob": "1995-05-15"
}
```

### Step 4 — Get all users (with pagination)

```
GET http://localhost:3000/api/users?page=1&limit=10
```

---

## 📡 Socket.io — Admin Notifications

When an admin creates a new user, all connected admins receive a real-time notification.

### Connect in Postman

1. New request → **Socket.IO**
2. Connect to `http://localhost:3000`
3. Add listener: `notification:new_user`
4. Emit: `join:admin`
5. Create a user via REST → notification appears instantly 🔔

### Notification payload

```json
{
    "message": "A new user has been created",
    "user": { ... },
    "timestamp": "2024-01-01T00:00:00.000Z"
}
```

---

## 👤 User Schema

| Field       | Type    | Required | Notes                       |
| ----------- | ------- | -------- | --------------------------- |
| firstName   | String  | ✅       | 2–10 characters             |
| lastName    | String  | ✅       | 2–10 characters             |
| email       | String  | ✅       | Unique, lowercase           |
| password    | String  | ✅       | Min 6 chars, never returned |
| role        | String  | ❌       | "ADMIN" or "USER" (default) |
| isActive    | Boolean | ❌       | Default: true               |
| phoneNumber | String  | ❌       |                             |
| dob         | Date    | ❌       |                             |

---

## 🔑 Key Design Decisions

| Decision                                | Reason                                                                               |
| --------------------------------------- | ------------------------------------------------------------------------------------ |
| `select: false` on password             | Password never returned in any query by default                                      |
| Hashing in service layer                | No pre-save hook — gives full control over when hashing happens                      |
| `role` & `isActive` stripped in service | Prevents clients from escalating their own role                                      |
| Soft delete vs hard delete              | Soft delete keeps data for auditing; hard delete removes permanently                 |
| Repository layer                        | Only layer that touches the DB — swap MongoDB for anything without changing services |
| `isAdmin` middleware                    | Role check lives in middleware, not service — keeps service pure                     |
