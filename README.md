# Dashboard App

A Next.js dashboard UI built with reusable components, Zustand state management, and a simple JSON-based API layer.

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Component Structure

The dashboard is organized with App Router layouts and focused presentational components.

```text
app/
  layout.tsx                  # Root app layout
  page.tsx                    # Landing/root page
  dashboard/
    layout.tsx                # Dashboard shell (includes Header)
    page.tsx                  # Dashboard content area
  components/
    Header.tsx                # Top section with logo, greeting, profile, mini XP badge
    Sidebar.tsx               # Left navigation menu
    ProgressBar.tsx           # XP progress UI with markers and labels
    ProjectList.tsx           # Project cards list
    Leaderboard.tsx           # Leaderboard cards
  lib/
    api.ts                    # Data-fetching utilities
  store/
    useStore.ts               # Zustand global store
```

### Dashboard Composition

- `app/dashboard/layout.tsx`: renders `Header` and wraps dashboard routes.
- `app/dashboard/page.tsx`: renders `Sidebar` and main content.
- Main content order:
  - `ProgressBar` (top)
  - `ProjectList` and `Leaderboard` (two-column grid below)

## State Management Approach

State is handled with [Zustand](https://zustand-demo.pmnd.rs/).

### Store Location

- `app/store/useStore.ts`

### Store Shape

- `user`: current user info
- `projects`: project list data
- `leaderboard`: leaderboard entries
- `selectedProject`: currently selected project

### Store Actions

- `setUser(user)`
- `setProjects(projects)`
- `setLeaderboard(leaderboard)`
- `setSelectedProject(project)`

### Data Flow

1. `app/dashboard/page.tsx` calls `fetchData()` inside `useEffect`.
2. Response is written to global store via Zustand actions.
3. Components can consume shared store data as needed.

## API Integration

API helper is intentionally simple and located in:

- `app/lib/api.ts`

Current implementation uses route handlers backed by `public/data.json`:

- `GET /user`
- `GET /projects`
- `GET /leaderboard`
- `GET /notes`
- `POST /notes`

Client integration is defined in `app/lib/api.ts` with dedicated functions:

- `fetchUser()`
- `fetchProjects()`
- `fetchLeaderboard()`
- `createNote({ text })`

The dashboard page includes:

- Loading state (`Loading dashboard data...`)
- Error handling banners for fetch/save failures
- Success feedback for successful dashboard load and note creation

## Notes

- UI is styled with Tailwind utility classes.
- Most components are currently client components (`"use client"`).
# Marsons-dashboard-app
