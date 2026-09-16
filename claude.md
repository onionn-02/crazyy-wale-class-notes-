# College Division Study Portal

## 1. PROJECT OVERVIEW

Build a clean, modern, mobile-friendly study portal for our college division.

The main purpose is to replace the messy process of searching through WhatsApp/Telegram announcement groups for old notes, PDFs, tutorials, and previous-year questions.

Instead of scrolling through hundreds of messages, students should be able to:

Home → Select Subject → Select Resource Category → Open/Download Resource

Example:

Mathematics
├── Notes
├── Tutorial 1
├── Tutorial 2
├── Tutorial 3
├── Previous Year Questions
└── Important Questions

The website should be extremely simple for students to use.

---

# 2. MAIN GOAL

Create a personal study portal for our college division.

Students should be able to access the website using one shared URL.

There should NOT be individual student accounts in Version 1.

There should NOT be a complicated custom backend in Version 1.

The website should be primarily a frontend that organizes study resources.

Resources can initially be hosted in Google Drive.

---

# 3. TECHNOLOGY

Use:

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React icons

Deployment:

- Vercel

Storage for Version 1:

- Google Drive

Do NOT build a custom backend unless absolutely necessary.

Do NOT add Firebase authentication in Version 1.

Do NOT create complicated database architecture.

Keep the project simple and maintainable.

---

# 4. WEBSITE STRUCTURE

## HOME PAGE

Create a beautiful dashboard.

The home page should contain:

- College/Division name
- "Study Portal" title
- Short description
- Search bar
- Subject cards
- Recently Added resources
- Important resources section

Example:

--------------------------------

        DIVISION STUDY HUB

   Everything you need for your studies.

   [ 🔍 Search notes, tutorials... ]

   SUBJECTS

   [ Mathematics ]
   [ English ]
   [ EEE ]
   [ MCD ]
   [ CTE ]
   [ PL ]

--------------------------------

Make the UI modern and clean.

Avoid making it look like a generic school website.

---

# 5. SUBJECT SYSTEM

Create reusable subject pages.

Initially include subjects such as:

1. Mathematics
2. English
3. EEE
4. MCD
5. CTE
6. PL

The structure must be easy to modify.

If another subject needs to be added later, it should require changing only the subject/resource data rather than rebuilding components.

---

# 6. MATHEMATICS PAGE EXAMPLE

When the student clicks:

Mathematics

Show:

### Mathematics Resources

- Notes
- Tutorial 1
- Tutorial 2
- Tutorial 3
- Previous Year Questions
- Important Questions
- Assignments
- Other Resources

Each category should be displayed as a clean card.

Example:

┌──────────────────────┐
│ 📚 Notes             │
│ Lecture notes & PDFs │
│ View Resources →     │
└──────────────────────┘

┌──────────────────────┐
│ 📝 Tutorial 1        │
│ Tutorial questions   │
│ View Resources →     │
└──────────────────────┘

---

# 7. RESOURCE PAGE

When the user clicks a category such as:

Tutorial 1

Show all available resources.

Example:

Mathematics → Tutorial 1

--------------------------------

Tutorial 1

[ Tutorial 1 PDF ]
Uploaded: 16 Sept 2026

[ Open PDF ]

--------------------------------

[ Tutorial 1 Solutions ]
Uploaded: 16 Sept 2026

[ Open PDF ]

--------------------------------

Resources should open in a new browser tab.

If the resource is a Google Drive file, the website should simply open the Google Drive link.

---

# 8. GOOGLE DRIVE SYSTEM

Version 1 should use Google Drive for storing files.

Example:

Google Drive
│
├── Mathematics
│   ├── Notes
│   ├── Tutorial 1
│   ├── Tutorial 2
│   ├── Tutorial 3
│   └── PYQs
│
├── English
│
├── EEE
│
├── MCD
│
├── CTE
│
└── PL

The website should contain links to these resources.

IMPORTANT:

Do not attempt to automatically access private Google Drive files.

The files/folders used by the website must have appropriate sharing permissions.

For resources intended for the whole division, use:

"Anyone with the link → Viewer"

where appropriate.

---

# 9. ADDING NEW NOTES

The website should be designed so adding a new resource is easy.

For Version 1, resources can be maintained inside a simple data file.

Example:

{
  title: "Tutorial 4",
  category: "Tutorials",
  subject: "Mathematics",
  date: "2026-09-16",
  url: "GOOGLE_DRIVE_LINK"
}

When a professor gives a new PDF:

1. Upload PDF to Google Drive.
2. Put it in the appropriate folder.
3. Copy the sharing link.
4. Add/update the resource entry in the website data.

Do NOT create a complicated admin dashboard in Version 1.

However, structure the code so an admin upload system can be added later.

---

# 10. SEARCH

Create a global search system.

Students should be able to search:

- Mathematics
- Tutorial 1
- EEE notes
- PYQ
- English
- Assignment
- etc.

Search results should show:

Resource name
Subject
Category
Open button

Example:

Search: "Tutorial 1"

Results:

Mathematics
Tutorial 1
[Open]

EEE
Tutorial 1
[Open]

---

# 11. RECENTLY ADDED

Add a "Recently Added" section on the homepage.

Example:

Recently Added

📄 Mathematics Tutorial 3
Mathematics • Tutorial 3

📄 EEE Unit 2 Notes
EEE • Notes

📄 Mathematics PYQ 2025
Mathematics • Previous Year Questions

The newest resources should appear first.

---

# 12. IMPORTANT RESOURCES

Add an optional section:

### Important

- Exam timetable
- Syllabus
- Important questions
- Internal assessment information
- Assignment deadlines
- Practical information

These should also be simple links.

---

# 13. NAVIGATION

Create a simple navigation system.

Navbar:

Logo / Study Hub

Home
Subjects
Search

Keep the navbar minimal.

On mobile, use a hamburger menu if required.

---

# 14. DESIGN

The design should feel like a modern student productivity platform.

Use:

- Rounded cards
- Clean typography
- Good spacing
- Subtle shadows
- Smooth hover animations
- Responsive layout
- Simple icons
- Clear hierarchy

Avoid:

- Excessive animations
- Huge gradients everywhere
- Clutter
- Too many colors
- Old-fashioned college website design

The website should look professional enough that students actually want to use it.

---

# 15. MOBILE FIRST

A large percentage of students will use phones.

Therefore:

The website MUST work extremely well on:

- Android phones
- iPhones
- Tablets
- Laptops
- Desktop computers

Buttons must be easy to tap.

Text must remain readable.

Cards should automatically adapt to screen size.

---

# 16. RESOURCE TYPES

Support links for:

- PDF
- Google Drive
- Google Docs
- Google Sheets
- External websites
- YouTube educational videos

Each resource should have an appropriate icon.

Examples:

PDF → FileText icon
Video → Play icon
Website → ExternalLink icon
Document → File icon

---

# 17. RESOURCE CARD

Each resource card should display:

- Resource title
- Subject
- Category
- Date added
- File type
- Open button

Example:

┌─────────────────────────────────┐
│ 📄 Mathematics Unit 2 Notes     │
│                                 │
│ Mathematics • Notes             │
│ Added: 16 Sept 2026             │
│                                 │
│             [ Open Resource ]   │
└─────────────────────────────────┘

---

# 18. DATA ARCHITECTURE

Keep all resource information separate from UI components.

For example:

src/
├── components/
├── pages/
├── data/
│   ├── subjects.ts
│   └── resources.ts
├── types/
├── assets/
└── App.tsx

Create reusable TypeScript types.

Example:

Subject

Resource

ResourceCategory

This will make the project easy to expand later.

---

# 19. FUTURE FEATURES

DO NOT implement these unless specifically requested later.

Possible future versions:

- Admin login
- Admin dashboard
- Upload resources directly from website
- Firebase Storage
- Firebase Firestore
- Student accounts
- Teacher accounts
- Notifications
- Announcement system
- Comments
- Bookmark/favorites
- Download tracking
- Automatic Google Drive integration

Version 1 should remain simple.

---

# 20. SECURITY

Do not expose private Google Drive files.

Do not put passwords or API keys inside the frontend.

Do not create fake authentication.

Do not store sensitive student information.

Only link to resources that are intentionally shared with the division.

---

# 21. PERFORMANCE

The website should be lightweight and fast.

Avoid unnecessary libraries.

Optimize images.

Lazy-load where appropriate.

Keep JavaScript bundles reasonable.

The homepage should load quickly even on mobile internet.

---

# 22. ERROR HANDLING

If a resource link is broken:

Show a friendly message such as:

"Sorry, this resource is currently unavailable."

Do not let a broken link crash the website.

---

# 23. EMPTY STATES

If a category has no resources:

Show:

"No resources added yet."

You can also display:

"Check back soon."

Do not leave an empty blank screen.

---

# 24. 404 PAGE

Create a simple custom 404 page.

Example:

"Oops! This page doesn't exist."

[Back to Study Hub]

---

# 25. ACCESSIBILITY

Use:

- Proper button elements
- Accessible labels
- Good color contrast
- Keyboard navigation
- Meaningful icons
- Alt text for images

Do not rely only on color to communicate information.

---

# 26. RESPONSIVE SUBJECT GRID

Desktop:

4 cards per row where appropriate.

Tablet:

2–3 cards per row.

Mobile:

1 card per row.

Make the layout responsive using Tailwind CSS.

---

# 27. FUTURE ADMIN-FRIENDLY STRUCTURE

Although Version 1 does not need authentication or a backend, structure the application so it can later support:

Admin
↓
Login
↓
Dashboard
↓
Add Resource
↓
Paste Google Drive Link
↓
Publish
↓
Students see new resource

Do not implement this now.

---

# 28. DEVELOPMENT APPROACH

Build the project in stages.

## Phase 1

Create the React + TypeScript + Vite project.

Configure Tailwind CSS.

Create the base layout.

---

## Phase 2

Create:

- Navbar
- Homepage
- Subject cards
- Footer

---

## Phase 3

Create subject pages.

Implement Mathematics first.

Then reuse the same structure for:

- English
- EEE
- MCD
- CTE
- PL

---

## Phase 4

Create resource categories.

Implement:

- Notes
- Tutorials
- PYQs
- Assignments
- Important Questions
- Other

---

## Phase 5

Create resource data architecture.

Make adding resources simple.

---

## Phase 6

Implement search.

---

## Phase 7

Implement:

- Recently Added
- Important Resources
- Empty states
- 404 page
- Error handling

---

## Phase 8

Responsive design.

Test:

- Mobile
- Tablet
- Laptop
- Desktop

---

## Phase 9

Final UI polish.

Add:

- Hover animations
- Transitions
- Icons
- Loading states where useful
- Clean spacing
- Typography improvements

---

## Phase 10

Production preparation.

Run:

npm run build

Fix every build error.

Check for broken links and console errors.

Prepare the project for Vercel deployment.

---

# 29. DEPLOYMENT

The project should be deployable on Vercel.

No custom domain is required.

The free Vercel URL is completely acceptable for Version 1.

Example:

https://division-study-hub.vercel.app

Do not purchase a domain.

Do not add paid services unless explicitly requested.

---

# 30. IMPORTANT RULE

DO NOT OVERENGINEER THIS PROJECT.

The goal is:

Simple.

Fast.

Clean.

Useful.

Easy to maintain.

Students should be able to find a document in a few clicks.

The website is NOT supposed to become a complicated social network or learning management system.

---

# 31. FINAL USER EXPERIENCE

The ideal experience should be:

Student opens link.

↓

Homepage

↓

Clicks Mathematics

↓

Clicks Tutorial 2

↓

Sees Tutorial 2 PDF

↓

Clicks Open

↓

PDF opens.

That's it.

No login.

No complicated forms.

No unnecessary steps.

---

# 32. CLAUDE CODE INSTRUCTIONS

Before writing code:

1. Inspect the existing project directory.
2. Read this CLAUDE.md completely.
3. Check whether a React/Vite project already exists.
4. Do not unnecessarily delete existing work.
5. Create a clean architecture.
6. Explain the implementation plan briefly.
7. Then begin implementation.

While coding:

- Use TypeScript properly.
- Avoid `any` unless absolutely necessary.
- Create reusable components.
- Keep data separate from UI.
- Keep components reasonably small.
- Use Tailwind CSS.
- Use Lucide icons.
- Keep the code beginner-friendly.
- Do not add unnecessary dependencies.
- Do not create a backend.
- Do not add authentication.
- Do not add Firebase.
- Do not add a database.

After implementation:

Run the development/build checks.

Fix errors.

Verify that navigation works.

Verify that resource links work.

Verify responsive layouts.

---

# 33. SUCCESS CRITERIA

The project is considered successful when:

✓ Students can open the website without logging in.

✓ Students can see all subjects.

✓ Students can click Mathematics.

✓ Mathematics contains Notes, Tutorials, PYQs, etc.

✓ Students can open individual resources.

✓ Google Drive links work.

✓ Students can search for resources.

✓ Recently added resources are visible.

✓ Website works on mobile.

✓ Website works on desktop.

✓ No backend is required.

✓ No paid domain is required.

✓ Project can be deployed on Vercel.

✓ Adding a new resource is simple.

✓ The UI looks modern and professional.

---

# END OF CLAUDE.md m        