# UI Task - React Implementation

A pixel-perfect React implementation of a complex form-based UI with multi-tabbed structure, sidebar navigation, and interactive map integration.

## 🎯 Features

- **Pixel-perfect UI replication** matching the provided design
- **Responsive layout** with fixed sidebar and dynamic content area
- **Interactive components** including:
  - Expandable sidebar navigation with sub-menu items
  - Tab navigation system with status indicators
  - Interactive map location picker
  - Comprehensive form validation
  - Real-time coordinate updates

## 🧱 Tech Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (useState, useEffect)
- **Icons**: Lucide React
- **Map Integration**: Leaflet (mock implementation)

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

## 🚀 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 🎨 UI Components

### Sidebar Navigation
- Fixed vertical sidebar with expandable menu items
- Active state highlighting with blue accent
- Sub-menu items with completion indicators
- Smooth hover transitions

### Top Navigation Bar
- Breadcrumb navigation ("Main > Sub")
- Notification bell icon
- User profile with avatar
- Responsive spacing

### Tab System
- Horizontal tab navigation (T01-T06)
- Active tab highlighting with dark blue background
- Status badges (S - 01, S - 02)
- "Add T" action button

### Form Components
- **Detail Panels** (Details 1 & Details 2):
  - Personal information fields
  - Contact details
  - Interactive map picker
  - Location coordinates (latitude/longitude)
  - Address fields with province/district dropdowns

- **Sub Details Section**:
  - Metadata fields (Name, Type, Total Value, Description)
  - Dimension fields (Quantity, Weight, Height, Length, Width)

## ⚙️ Functionality

### Map Integration
- Clickable map area that generates random coordinates
- Real-time latitude/longitude updates
- Visual feedback on interaction

### Form Validation
- Required field indicators (*)
- Basic input validation
- Dropdown selections for provinces and districts

### State Management
- Component-level state using React hooks
- Controlled form inputs
- Coordinate synchronization between map and form fields

## 📱 Responsiveness

- Desktop-first design
- Fixed sidebar layout
- Grid-based responsive form layouts
- Proper spacing and padding at all screen sizes

## 🎯 Design Accuracy

This implementation maintains pixel-perfect accuracy with:
- Exact color palette matching
- Consistent typography and spacing
- Proper visual hierarchy
- Interactive state behaviors
- Professional UI/UX patterns

## 🔧 Customization

The components are built with reusability in mind:
- Configurable props for all form elements
- Themeable through Tailwind CSS
- Easy to extend with additional functionality
- Modular component structure

## 📝 Known Limitations

- Map implementation is mocked (no actual map rendering)
- No backend integration
- Form data is stored locally in component state
- No persistent data storage

## 🛠 Development

This project uses modern development practices:
- ES6+ JavaScript
- Component-based architecture
- Clean code organization
- Production-ready build configuration