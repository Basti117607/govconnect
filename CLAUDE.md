# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GovConnect is an interactive prototype for discovering internal government projects with a swipe-based interface. It's a TypeScript/Vite web application that simulates a Tinder-like experience for matching government employees with internal projects.

## Development Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server (requires GEMINI_API_KEY in .env.local)
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Environment Setup

The application requires a `GEMINI_API_KEY` environment variable set in `.env.local` for the Gemini API integration.

## Architecture

This is a single-page application with a vanilla TypeScript/JavaScript approach:

### Core Structure
- **index.html** - Main HTML template with navigation and views
- **index.tsx** - Main application logic (despite .tsx extension, this is vanilla TypeScript)
- **index.css** - Styling (uses Tailwind CSS classes)
- **vite.config.ts** - Vite configuration with Gemini API key injection

### Application State
The app maintains global state variables:
- `currentUser` - Current logged-in user data
- `projectsToSwipe` - Queue of projects available for swiping
- `interestedProjects` - Projects the user has liked
- `dislikedProjects` - Projects the user has rejected
- `swipedProjects` - All projects the user has interacted with

### View System
Single-page app with view switching via `switchView()` function:
- **dashboard-view** - Overview with statistics cards
- **swipe-view** - Tinder-like card stack for project discovery
- **profile-view** - User profile display
- **matches-view** - Projects the user has shown interest in
- **reconsider-view** - Previously rejected projects that can be reconsidered

### Key Functions
- `renderProjectCards()` - Creates the swipeable card stack
- `handleSwipe(liked)` - Processes swipe actions and updates state
- `switchView(viewId)` - Handles navigation between views
- `showProjectDetailsModal(projectId)` - Displays project details in modal

### Data Model
Mock data includes:
- Users with skills, interests, department, and availability
- Projects with title, description, required skills, effort, duration, and contact info

The application uses DOM manipulation and event delegation for interactivity, with CSS transitions for smooth animations.