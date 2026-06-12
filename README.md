# JournaLense

> Capture your thoughts today. Understand your journey tomorrow.

## Overview

JournaLense is a personal journaling and reflection platform designed to help users record daily thoughts, track personal growth, build consistent journaling habits, and gain insights from their entries over time.

The project was created to solve a simple problem: keeping a journal accessible anywhere. Instead of writing only on a laptop, JournaLense provides a centralized web-based journal that can be accessed from desktop and mobile devices.

The application focuses on simplicity, privacy, and self-reflection while providing useful tools such as calendars, reminders, mood tracking, and future AI-powered insights.

---

## Objectives

* Create a centralized digital journal accessible from any device.
* Encourage daily journaling habits.
* Track personal growth and reflections over time.
* Provide an organized and searchable journal archive.
* Explore AI-powered journaling features for deeper self-reflection.

---

## Tech Stack

### Backend

* Laravel
* PHP
* MySQL

### Frontend

* React.js
* TypeScript
* Inertia.js
* Tailwind CSS

### Authentication

* Laravel Breeze (React + Inertia)

### Future Integrations

* OpenAI API
* Email Notifications
* Progressive Web App (PWA)
* Push Notifications

---

## Features

### Authentication

* User Registration
* User Login
* User Logout
* Password Reset

### Dashboard

* Welcome Dashboard
* Today's Journal Entry
* Recent Journal Entries
* Journal Statistics
* Calendar Overview

### Journal Management

* Create Journal Entry
* Edit Journal Entry
* Delete Journal Entry
* View Journal Details
* Save Drafts
* Search Entries

### Calendar System

* Monthly Calendar View
* Journal Activity Indicators
* View Entries by Date
* Quick Entry Creation from Calendar

### Mood Tracking

* Select Mood During Journal Creation
* Mood History
* Mood Trends

### Reminder System

* Daily Reminder Settings
* Email Reminder Notifications
* Journal Streak Tracking

### Profile Management

* Update Profile Information
* Change Password
* Notification Preferences

---

## Future AI Features

### AI Reflection Assistant

Analyze journal entries and provide:

* Entry Summary
* Mood Analysis
* Reflection Insights
* Writing Prompts
* Personal Growth Suggestions

### Weekly Reflection Report

Generate summaries such as:

* Weekly Mood Trends
* Most Common Topics
* Personal Achievements
* Reflection Questions

### AI Writing Companion

Help users:

* Continue Writing
* Overcome Writer's Block
* Generate Reflection Prompts
* Expand Journal Entries

---

## Typical User Flow

### Account Creation

```text
Register
    ↓
Login
    ↓
Dashboard
```

### Writing a Journal

```text
Dashboard
    ↓
Create Journal Entry
    ↓
Write Content
    ↓
Select Mood
    ↓
Save Entry
```

### Viewing Past Journals

```text
Calendar
    ↓
Select Date
    ↓
View Journal Entry
```

### AI Reflection

```text
Open Journal Entry
    ↓
Reflect with AI
    ↓
Receive Insights
```

---

## Database Structure (Initial Version)

### Users

```text
id
name
email
password
created_at
updated_at
```

### Journal Entries

```text
id
user_id
title
content
mood
entry_date
created_at
updated_at
```

### Reminders

```text
id
user_id
reminder_time
is_enabled
created_at
updated_at
```

---

## Project Roadmap

### Version 1.0

* Authentication
* Dashboard
* Journal CRUD
* Calendar View
* Responsive Design

### Version 1.5

* Mood Tracking
* Search Functionality
* Reminder Settings
* Journal Statistics

### Version 2.0

* AI Reflection Assistant
* Weekly Reports
* Journal Streak System
* Data Export

### Version 3.0

* Progressive Web App (PWA)
* Push Notifications
* Mobile Optimization
* Voice-to-Journal Feature

---

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/journalense.git
```

### Install Backend Dependencies

```bash
composer install
```

### Install Frontend Dependencies

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
php artisan key:generate
```

### Run Database Migrations

```bash
php artisan migrate
```

### Start Development Server

```bash
php artisan serve
npm run dev
```

---

## Project Status

🚧 Currently in Development

JournaLense is being developed as a personal journaling platform focused on accessibility, habit-building, self-reflection, and AI-assisted personal growth.

---

## Author

Developed by Edmyr Batiancila

Software Developer | Laravel Developer | React Developer

Building practical applications that solve real-world problems and improve everyday productivity.
