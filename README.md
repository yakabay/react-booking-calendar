# React Booking Calendar

A booking calendar application built with React and TypeScript.

## How to Use

### Client Page

- View available time slots in the calendar
- Select a date and time
- Fill in personal user info and complete the booking

### Practitioner Page

- This page allows the practitioner to view all booked appointments

### Link to the app

- https://react-booking-calendar-legz.vercel.app/

## Technologies

### Core

- **React**
- **TypeScript**
- **Vite (bundler)**

### Styling

- **SASS**
- **BEM** - Block Element Modifier methodology
- **CLSX** - Tiny library for dynamic class names

### State & Validation

- **Zustand** - Simple but robust state management
- **Immer** - Very convenient library for state updates
- **React Hook Form** - Performant form handling with built-in validation
- **Zod** - Schema validation with automatic TypeScript types for the form

### Animations

- **Framer Motion**

### Testing

- **Unit tests** - utility functions are covered with Jest tests

### Code quality

- **ESLint**
- **Prettier**
- **Husky** - Git hooks that run ESLint and Prettier checks before each commit

## Run application

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Testing

Run tests:

```bash
npm test
```
