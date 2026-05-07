# Placement Portal Backend

Express.js backend server for the Placement Portal application with PostgreSQL and Prisma ORM.

## Setup

### 1. Install dependencies:
```bash
npm install
```

### 2. Set up PostgreSQL Database

Make sure you have PostgreSQL installed and running on your system.

Create a new database:
```sql
CREATE DATABASE placement_portal;
```

### 3. Configure Environment Variables

Copy `.env.example` to `.env` and update with your database credentials:
```bash
cp .env.example .env
```

Update the `DATABASE_URL` in `.env`:
```
DATABASE_URL="postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/placement_portal?schema=public"
```

### 4. Run Prisma Migrations

Generate Prisma Client and create database tables:
```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm start` - Start production server
- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma migrate dev` - Create and apply migrations
- `npx prisma generate` - Generate Prisma Client

## Tech Stack

- **Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT tokens (Coming soon)
- **File Storage**: Cloudinary (Coming soon)
- **AI**: Claude API (Anthropic) (Coming soon)

## API Endpoints

### Health Check
- `GET /api/health` - Server health check
- `GET /` - Welcome message

## Project Structure

```
server/
├── prisma/
│   ├── schema.prisma      # Database schema
│   └── migrations/        # Database migrations
├── src/
│   ├── config/
│   │   └── database.js    # Prisma client instance
│   ├── controllers/       # Route handlers
│   ├── middlewares/       # Custom middleware
│   ├── routes/            # API routes
│   ├── services/          # Business logic
│   ├── utils/             # Helper functions
│   └── app.js             # Express app setup
├── server.js              # Server entry point
├── .env                   # Environment variables
├── .env.example           # Example environment variables
└── package.json           # Dependencies
```

## Database Schema

The application includes the following models:

- **User** - Base authentication (email, password, role)
- **Student** - Student profiles with resume and CGPA
- **Company** - Company profiles
- **Admin** - Admin profiles
- **Job** - Job postings by companies
- **Application** - Student job applications

### Roles
- `STUDENT` - Students looking for placements
- `COMPANY` - Companies posting jobs
- `ADMIN` - Platform administrators

## Next Steps

1. ✅ Express server setup
2. ✅ PostgreSQL + Prisma setup
3. ⏳ JWT authentication
4. ⏳ Cloudinary file storage
5. ⏳ Claude API integration

## Useful Prisma Commands

```bash
# View database in browser
npx prisma studio

# Create a new migration
npx prisma migrate dev --name migration_name

# Reset database (WARNING: deletes all data)
npx prisma migrate reset

# Generate Prisma Client after schema changes
npx prisma generate

# Format schema file
npx prisma format
```
