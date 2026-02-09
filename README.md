# UI Task - React Implementation

## 📋 Project Overview

A pixel-perfect React implementation of a complex form-based UI with multi-tabbed structure, sidebar navigation, and interactive map integration. This project replicates the exact design specifications provided in the reference image with professional-grade responsiveness and interactive components.

## 🧱 Technology Stack Used

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Lucide React
- **Map Integration**: Leaflet (mock implementation)

## ⚙️ Setup and Run Instructions

1. **Clone the repository** (if applicable):
```bash
git clone <repository-url>
cd ui-task-react
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

4. **Build for production**:
```bash
npm run build
```

5. **Preview production build**:
```bash
npm run preview
```



## ⚠️ Known Limitations and Unimplemented Features

### Current Limitations:
- **Map Implementation**: Uses mock coordinate generation instead of actual map rendering
- **Backend Integration**: Pure frontend implementation with no API connections
- **Data Persistence**: Form data stored only in component state, no localStorage or database
- **Form Submission**: No actual form submission functionality implemented
- **Advanced Validation**: Only basic required field validation, no complex validation rules

### Features Not Implemented:
- User authentication and session management
- Data export/import functionality
- Advanced form validation with custom rules
- Real-time collaboration features
- Offline capability
- Progressive Web App (PWA) features
- Accessibility compliance (WCAG standards)
- Internationalization (i18n) support
- Advanced animations and micro-interactions
- Unit and integration testing suite

## 🎯 Features

- **Pixel-perfect UI replication** matching the provided design specifications
- **Fully responsive layout** with mobile, tablet, and desktop support
- **Interactive components** including:
  - Expandable sidebar navigation with icon support
  - Multi-tab navigation system with status indicators
  - Interactive map location picker with real-time coordinate updates
  - Comprehensive form validation with visual feedback
  - Collapsible sidebar for mobile devices

## 📁 Project Structure

```
ui-task-react/
├── public/
├── src/
│   ├── assets/
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── Tabs.jsx
│   │   ├── DetailPanel.jsx
│   │   ├── SubDetails.jsx
│   │   ├── MapPicker.jsx
│   │   └── FormInput.jsx
│   ├── pages/
│   │   └── index.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 UI Components

### Sidebar Navigation
- Fixed vertical sidebar with expandable menu items
- Icon support for all menu items (Home, Menu2, Documents, Users, etc.)
- Active state highlighting with blue accent
- Sub-menu items with completion indicators
- Smooth hover transitions and mobile-responsive design

### Top Navigation Bar
- Page title ("Main Title") with breadcrumb navigation
- Notification bell icon and user profile ("John Smith")
- Responsive hamburger menu for mobile devices
- Clean, professional appearance

### Tab System
- Horizontal tab navigation (T01-T06)
- Active tab highlighting with dark blue background
- Status badges (S - 01, S - 02) for workflow indicators
- "Add T" action button with prominent styling

### Form Components
- **Detail Panels** (Details 1 & Details 2):
  - Personal information fields with proper validation
  - Contact details with international phone number support
  - Interactive map picker with coordinate display
  - Location fields (Province, District, City, Street)
  - Address note field with multi-line support

- **Sub Details Section**:
  - Metadata fields (Name, Type, Total Value, Description)
  - Dimension fields (Quantity, Weight, Height, Length, Width)
  - Dropdown selectors with proper placeholder text

## 📱 Responsiveness

- **Desktop**: Full sidebar visible with two-column form layout
- **Tablet**: Collapsible sidebar with adaptive grid layouts
- **Mobile**: Hidden sidebar with hamburger menu, single-column forms
- **Touch Optimization**: Proper tap targets and spacing for mobile users
- **Breakpoint Strategy**: Mobile-first approach with sm, md, lg breakpoints

## 🛠 Development

This project uses modern development practices:
- ES6+ JavaScript with modern React patterns
- Component-based architecture for reusability
- Clean code organization following best practices
- Production-ready build configuration with Vite
- Hot Module Replacement for efficient development workflow
