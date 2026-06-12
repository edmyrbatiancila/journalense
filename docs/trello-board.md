# JournaLense Trello Board Plan

Assumption: solo developer, part-time pace of about 10-15 focused hours per week.

Realistic target:

- Version 1.0 MVP: July 24, 2026
- Version 1.5 polished personal-use release: August 21, 2026
- Version 2.0 AI and reports: October 2, 2026
- Version 3.0 PWA/mobile extras: November 6, 2026

If this becomes a full-time project, the same scope could likely compress to 8-10 weeks. If work is limited to nights/weekends only, expect 5-6 months.

## Board

Title: JournaLense Project Build

## Labels

- Backend: blue
- Frontend: purple
- Database: green
- UX/UI: pink
- Auth: yellow
- Testing: red
- AI: black
- Notification: orange
- Release: sky
- Nice-to-have: gray

## Lists

1. Backlog
2. Sprint 1 - Foundation
3. Sprint 2 - Journal MVP
4. Sprint 3 - Calendar + Dashboard
5. Sprint 4 - Mood + Search + Stats
6. Sprint 5 - Reminders + Streaks
7. Sprint 6 - AI Reflection
8. Sprint 7 - PWA + Mobile
9. Testing + QA
10. Done

## Cards

### Backlog

#### Data Export

- Labels: Backend, Frontend, Nice-to-have
- Due: September 25, 2026
- Checklist:
  - Decide export formats: JSON, CSV, PDF, or Markdown
  - Add export endpoint
  - Add export action in profile or journal archive
  - Test user can only export their own entries

#### Voice-to-Journal Feature

- Labels: Frontend, UX/UI, Nice-to-have
- Due: November 6, 2026
- Checklist:
  - Research browser speech recognition support
  - Add microphone permission flow
  - Convert speech to draft text
  - Add fallback for unsupported browsers

#### Push Notifications

- Labels: Notification, Frontend, Backend, Nice-to-have
- Due: October 30, 2026
- Checklist:
  - Choose push notification approach
  - Add browser permission flow
  - Store push subscriptions
  - Send reminder push notifications

### Sprint 1 - Foundation

#### Confirm Project Setup

- Labels: Backend, Frontend
- Due: June 15, 2026
- Checklist:
  - Confirm Laravel app boots
  - Confirm React/Inertia pages render
  - Confirm Tailwind styles compile
  - Confirm MySQL connection works
  - Run initial tests/build

#### Configure Environment

- Labels: Backend, Database
- Due: June 16, 2026
- Checklist:
  - Finalize `.env` database settings
  - Generate application key
  - Run migrations
  - Configure mail driver for local testing

#### Install And Verify Laravel Breeze Auth

- Labels: Auth, Backend, Frontend
- Due: June 19, 2026
- Checklist:
  - Confirm registration works
  - Confirm login works
  - Confirm logout works
  - Confirm password reset pages exist
  - Confirm authenticated routes are protected

#### Create Base App Navigation

- Labels: Frontend, UX/UI
- Due: June 21, 2026
- Checklist:
  - Add dashboard link
  - Add journal entries link
  - Add calendar link
  - Add profile/settings link
  - Make navigation responsive

### Sprint 2 - Journal MVP

#### Create Journal Entries Migration And Model

- Labels: Backend, Database
- Due: June 23, 2026
- Checklist:
  - Add `journal_entries` migration
  - Add `JournalEntry` model
  - Add user relationship
  - Add fillable fields
  - Add factory for tests

#### Build Journal CRUD Routes And Controller

- Labels: Backend
- Due: June 26, 2026
- Checklist:
  - Add index route
  - Add create/store routes
  - Add show route
  - Add edit/update routes
  - Add delete route
  - Protect all routes by authenticated user

#### Build Journal Entry Form

- Labels: Frontend, UX/UI
- Due: June 30, 2026
- Checklist:
  - Add title input
  - Add content editor/textarea
  - Add entry date input
  - Add mood selector placeholder
  - Add validation error display
  - Add save button states

#### Build Journal Archive And Details Pages

- Labels: Frontend, UX/UI
- Due: July 3, 2026
- Checklist:
  - Show entries list
  - Show empty state
  - Show journal detail page
  - Add edit action
  - Add delete confirmation
  - Ensure mobile layout is usable

#### Add Draft Saving

- Labels: Backend, Frontend
- Due: July 7, 2026
- Checklist:
  - Add draft status field or nullable publish behavior
  - Save draft without requiring final content
  - Show drafts in archive
  - Allow editing and publishing drafts

### Sprint 3 - Calendar + Dashboard

#### Build Dashboard Summary

- Labels: Frontend, Backend, UX/UI
- Due: July 10, 2026
- Checklist:
  - Show welcome section
  - Show today's journal entry action
  - Show recent journal entries
  - Show basic entry count
  - Show quick calendar preview

#### Build Monthly Calendar View

- Labels: Frontend, Backend, UX/UI
- Due: July 15, 2026
- Checklist:
  - Render current month
  - Add previous/next month controls
  - Mark dates with entries
  - Open entries by date
  - Add quick entry creation from a date

#### Make Version 1.0 Responsive

- Labels: Frontend, UX/UI, Release
- Due: July 20, 2026
- Checklist:
  - Test dashboard on mobile
  - Test journal forms on mobile
  - Test calendar on mobile
  - Fix overflow and spacing issues
  - Confirm desktop layout still works

#### Version 1.0 MVP Release

- Labels: Release, Testing
- Due: July 24, 2026
- Checklist:
  - Run backend tests
  - Run frontend build
  - Do manual auth flow test
  - Do manual journal CRUD test
  - Do manual calendar test
  - Tag MVP milestone

### Sprint 4 - Mood + Search + Stats

#### Add Mood Tracking

- Labels: Backend, Frontend, Database
- Due: July 31, 2026
- Checklist:
  - Finalize mood options
  - Store mood on journal entry
  - Show mood on entry details
  - Add mood filters or history view
  - Add validation

#### Add Search Functionality

- Labels: Backend, Frontend
- Due: August 7, 2026
- Checklist:
  - Search by title
  - Search by content
  - Filter by date
  - Filter by mood
  - Preserve search state in UI

#### Add Journal Statistics

- Labels: Backend, Frontend, UX/UI
- Due: August 14, 2026
- Checklist:
  - Total entries
  - Entries this week
  - Entries this month
  - Most common mood
  - Recent activity summary

#### Version 1.5 Release

- Labels: Release, Testing
- Due: August 21, 2026
- Checklist:
  - Regression test journal CRUD
  - Regression test dashboard
  - Regression test calendar
  - Test search edge cases
  - Test mood statistics
  - Run production build

### Sprint 5 - Reminders + Streaks

#### Create Reminders Table And Settings

- Labels: Backend, Database, Notification
- Due: August 28, 2026
- Checklist:
  - Add reminders migration
  - Add reminder model
  - Add reminder settings page
  - Save reminder time
  - Save enabled/disabled state

#### Add Email Reminder Notifications

- Labels: Backend, Notification
- Due: September 4, 2026
- Checklist:
  - Create reminder mailable/notification
  - Add scheduled command
  - Configure queue behavior
  - Test local email delivery
  - Prevent duplicate reminders

#### Add Journal Streak Tracking

- Labels: Backend, Frontend
- Due: September 11, 2026
- Checklist:
  - Define streak rules
  - Calculate current streak
  - Calculate longest streak
  - Show streak on dashboard
  - Add tests for date edge cases

### Sprint 6 - AI Reflection

#### Design AI Reflection Data Flow

- Labels: AI, Backend
- Due: September 16, 2026
- Checklist:
  - Decide what entry text is sent to AI
  - Add privacy warning/consent copy
  - Decide whether to store AI outputs
  - Add AI configuration variables

#### Build AI Reflection Assistant

- Labels: AI, Backend, Frontend
- Due: September 25, 2026
- Checklist:
  - Add OpenAI service class
  - Generate entry summary
  - Generate mood analysis
  - Generate reflection insights
  - Generate writing prompts
  - Show loading and error states

#### Build Weekly Reflection Report

- Labels: AI, Backend, Frontend
- Due: October 2, 2026
- Checklist:
  - Gather entries for selected week
  - Generate weekly mood trends
  - Generate common topics
  - Generate achievements
  - Generate reflection questions
  - Add weekly report UI

### Sprint 7 - PWA + Mobile

#### Add PWA Support

- Labels: Frontend, Release
- Due: October 16, 2026
- Checklist:
  - Add web app manifest
  - Add service worker
  - Add app icons
  - Test install behavior
  - Confirm basic offline fallback

#### Mobile Optimization Pass

- Labels: Frontend, UX/UI
- Due: October 23, 2026
- Checklist:
  - Improve touch targets
  - Tighten mobile spacing
  - Improve journal editor on mobile
  - Improve calendar on small screens
  - Test common mobile viewport sizes

#### Version 3.0 Release

- Labels: Release, Testing
- Due: November 6, 2026
- Checklist:
  - Test PWA install
  - Test mobile layouts
  - Test reminders
  - Test AI flows
  - Run full regression pass
  - Prepare final README update

### Testing + QA

#### Add Feature Tests For Journal Entries

- Labels: Testing, Backend
- Due: July 8, 2026
- Checklist:
  - Authenticated user can create entry
  - Authenticated user can update own entry
  - Authenticated user can delete own entry
  - User cannot access another user's entry
  - Validation errors are returned

#### Add Feature Tests For Calendar And Search

- Labels: Testing, Backend
- Due: August 12, 2026
- Checklist:
  - Calendar returns only current user's entries
  - Date filter works
  - Title search works
  - Content search works
  - Mood filter works

#### Add Manual QA Checklist

- Labels: Testing, Release
- Due: July 22, 2026
- Checklist:
  - Register account
  - Login/logout
  - Create entry
  - Edit entry
  - Delete entry
  - Save draft
  - Browse calendar
  - Search entries
  - Update profile

## Suggested Milestones

- June 21, 2026: foundation and auth stable
- July 7, 2026: journal CRUD and drafts usable
- July 24, 2026: Version 1.0 MVP complete
- August 21, 2026: Version 1.5 complete
- October 2, 2026: Version 2.0 AI release complete
- November 6, 2026: Version 3.0 full roadmap complete

## Scope Warning

The realistic completion date depends heavily on whether AI, reminders, PWA, push notifications, and voice input are included in "complete." For a portfolio-ready MVP, target July 24, 2026. For the full README roadmap, target November 6, 2026.
