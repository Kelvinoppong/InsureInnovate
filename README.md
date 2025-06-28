
# InsureInnovate

## Overview

This project helps generate innovative ideas for the insurance industry based on user input and guided prompts.

## Features

* Interactive idea suggestions
* User-friendly interface
* Auto-update with latest changes

## Usage

1. Clone the repository
2. Install dependencies (`npm install`)
3. Create a `.env.local` file with Firebase config (see below)
4. Run the project locally (`npm run dev`)


## How It Works

* Accepts user input related to insurance needs or topics
* Generates tailored suggestions using a structured approach
* Displays results in real-time for iteration and exploration

## Daily Log

### 2025-06-24
- Installed project dependencies (`npm install`).
- Added Sign In section before Features on landing page (`app/page.tsx`), including form, background, imports.
- Updated imports for `Input` and `Label` components.
- Tested development server (`npm run dev`) and verified landing page layout.

### 2025-06-25
- Integrated Firebase Authentication:
  - Created `lib/firebase.ts` to initialize Firebase SDK.
  - Added `context/AuthContext.tsx` to manage auth state and protection.
  - Wrapped application in `<AuthProvider>` in `app/layout.tsx`.
  - Updated `app/login/page.tsx` to implement sign-in/sign-up with Firebase (controlled inputs and auth flows).
- Added reminder: set Firebase config in `.env.local` (`NEXT_PUBLIC_FIREBASE_*`) and install Firebase (`npm install firebase`).
- Updated README with setup instructions and environment variables. (2025-06-28)


