# Placement Portal Backend

Express.js backend server for the Placement Portal application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Copy `.env.example` to `.env` and configure your environment variables:
```bash
cp .env.example .env
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server with nodemon (auto-reload)
- `npm start` - Start production server

## Tech Stack

- **Framework**: Express.js
- **Database**: PostgreSQL (via Prisma ORM) - Coming soon
- **Authentication**: JWT tokens - Coming soon
- **File Storage**: Cloudinary - Coming soon
- **AI**: Claude API (Anthropic) - Coming soon

## API Endpoints

### Health Check
- `GET /api/health` - Server health check

## Project Structure

```
server/
├── index.js          # Main server file
├── .env              # Environment variables (not in git)
├── .env.example      # Example environment variables
├── package.json      # Dependencies and scripts
└── README.md         # This file
```

## Next Steps

1. ✅ Express server setup
2. ⏳ PostgreSQL + Prisma setup
3. ⏳ JWT authentication
4. ⏳ Cloudinary file storage
5. ⏳ Claude API integration
