# Task Management Application

A simple task management application built with **Next.js (App Router) and Server Actions**, using **MongoDB** for data persistence. This application allows users to create, read, update, delete, and mark tasks as complete/incomplete.

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Store task details (title, description, due date)
- Data persistence with MongoDB
- Error handling and loading states


## Tech Stack

- **Frontend:** Next.js (App Router, Server Actions)
- **Backend:** Next.js API Routes
- **Database:** MongoDB
- **UI Library:** ShadCN UI (using Tailwind CSS)
- **Deployment:** Vercel



## Getting Started

First, clone the repository and install dependencies:

```bash
git clone https://github.com/Shondarzer-Taroka/task-manager-1.git
cd task-manager-1
npm install
```

### Setup Environment Variables

Create a `.env.local` file in the root directory and add the following:

```env
MONGODB_URI=<your-mongodb-connection-string>
```

### Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Deployment on Vercel

The easiest way to deploy this Next.js application is to use [Vercel](https://vercel.com/).

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Set up environment variables on Vercel
4. Deploy the project

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


