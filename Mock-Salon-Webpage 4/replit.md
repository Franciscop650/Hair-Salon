# El Y Ella - Bilingual Salon Booking System

## Overview

This is a modern full-stack web application for "El Y Ella", a Hispanic beauty salon, built with React frontend and Express backend. The application allows customers to browse services with pricing and book appointments online. It features a clean, professional design with a salon-themed aesthetic using gold and cream color schemes. The website is fully bilingual (English/Spanish) to serve both English and Spanish-speaking customers.

## User Preferences

Preferred communication style: Simple, everyday language.
Salon Name: El Y Ella (Hispanic salon)
Language Support: Bilingual English/Spanish website

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for salon theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite for development and building

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **API Style**: RESTful API endpoints
- **Development**: Uses tsx for TypeScript execution in development
- **Build**: esbuild for production bundling

### Database Architecture
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Centralized in shared directory for type safety
- **Migrations**: Drizzle Kit for schema migrations
- **Development Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Layout Components**: Navbar with responsive mobile menu and language switcher, Footer with contact info
- **Page Components**: Home, Services, Reservations, and 404 pages (all with bilingual support)
- **UI Components**: Comprehensive set of reusable components (buttons, forms, cards, etc.)
- **Custom Components**: Service cards, pricing cards, hero sections, contact info displays
- **Language System**: Complete translation system with English/Spanish support and language context provider

### Backend Components
- **Storage Layer**: Abstract storage interface with in-memory implementation
- **Route Handlers**: RESTful endpoints for reservation management
- **Middleware**: Request logging, error handling, static file serving
- **Development Tools**: Vite integration for hot reloading in development

### Shared Components
- **Schema Definitions**: Drizzle schema for users and reservations
- **Type Definitions**: Shared TypeScript types between frontend and backend
- **Validation**: Zod schemas for form validation

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Route Processing**: Express routes handle incoming requests
3. **Data Validation**: Zod schemas validate incoming data
4. **Storage Operations**: Storage layer handles data persistence
5. **Response**: JSON responses sent back to client
6. **UI Updates**: React Query manages cache updates and UI re-renders

### Reservation Flow
1. Customer fills out reservation form on frontend
2. Form data validated with Zod schema
3. POST request sent to `/api/reservations`
4. Backend validates and stores reservation
5. Success toast shown to user
6. Form resets for new submissions

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with TypeScript support
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod resolvers
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Internationalization**: Custom translation system with React Context for bilingual support

### Backend Dependencies
- **Database**: Neon Database serverless PostgreSQL
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Validation**: Zod for runtime type validation
- **Development**: tsx for TypeScript execution

### Build Tools
- **Frontend Build**: Vite with React plugin
- **Backend Build**: esbuild for production bundling
- **Development**: Concurrent development with Vite dev server and Express

## Deployment Strategy

### Development
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript support
- Concurrent development setup with both servers running

### Production Build
- Frontend built to static files in `dist/public`
- Backend bundled to single JavaScript file in `dist`
- Static files served by Express in production
- Database migrations run via Drizzle Kit

### Environment Configuration
- Database URL required via environment variables
- Drizzle configuration for PostgreSQL connection
- Development vs production environment detection

### Replit Integration
- Custom Vite plugins for Replit development environment
- Runtime error overlay for development debugging
- Cartographer plugin for Replit code exploration

## Recent Changes (January 2025)

### Branding Update
- Changed salon name from "Luxe Beauty" to "El Y Ella" 
- Updated all branding elements including logo, contact info, and footer
- Transformed to serve Hispanic community with appropriate cultural considerations

### Bilingual Support Implementation
- Created comprehensive translation system with English and Spanish translations
- Implemented language context provider for state management
- Added language switcher component in navigation (desktop and mobile)
- Translated all user-facing content including:
  - Navigation menus
  - Page titles and content
  - Form labels and placeholders
  - Service descriptions
  - Contact information
  - Footer content

### Technical Improvements
- Fixed SelectItem component error by providing proper value props
- Resolved TypeScript errors in storage layer for proper null handling
- Fixed CSS import ordering issues for proper font loading
- Updated email addresses and branding throughout the application

### Architecture Enhancement
- Added language provider to main App component
- Implemented translation hook (useLanguage) for component-level translations
- Maintained existing responsive design and accessibility features
- Preserved all existing functionality while adding new language capabilities

The application now successfully serves both English and Spanish-speaking customers with a seamless language switching experience, maintaining all original functionality while expanding accessibility to the Hispanic community.