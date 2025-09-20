# Team Dashboard – Frontend Assessment

A responsive and theme-aware **Team Dashboard** built with **React**, **TypeScript**, **Redux Toolkit**, **TailwindCSS**, and **ShadCN UI components**.

## 🚀 Features

- Search and filter team members by name and role
- Responsive layout (mobile + desktop cards)
- Modal view with tabbed interface (Profile & Projects)
- Dark mode support (auto-detect + toggle)
- Clean, modular folder structure
- Redux Toolkit store for member state

## 📂 Folder Structure (Simplified)

```
src/
├── components/         # Reusable UI components (Navbar, MemberCard, etc.)
├── Pages/              # Main page views (Dashboard)
├── data/               # Mock data (members.ts)
├── features/           # Redux slices (basicSlice.ts)
├── App.tsx             # App entry point
└── main.tsx            # ReactDOM bootstrap
```

## 🌙 Dark Mode Support

- Automatically applies dark theme based on system/browser settings.
- Users can toggle between **Light** and **Dark** mode via the toggle button in the navbar.
- Preference is saved in `localStorage`.

## 📦 Installation

1. Clone the repo:

```bash
git clone https://github.com/yourusername/team-dashboard.git
cd team-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Start the dev server:

```bash
npm run dev
```

## 🧠 Approach & Architecture

- **Atomic design** principles followed for components.
- State management using **Redux Toolkit** for clear separation.
- Data stored in Redux store and filtered in-memory based on user input.
- Reusable components styled with TailwindCSS + ShadCN patterns.
- Mobile-first responsive cards and modal structure.
- Tabs allow clean separation of member profile and projects.

## ✅ Evaluation Checklist

### Core Requirements
- ✅ Functional dashboard UI with search and filters
- ✅ Modal with detailed view per member
- ✅ Role-based filtering using dropdown
- ✅ Redux setup with original + filtered member state

### UI/UX & Styling
- ✅ Responsive cards and modal layout
- ✅ Smooth animations and transitions
- ✅ TailwindCSS + ShadCN styling system

### Error Handling & Accessibility
- ✅ Clean fallback UI when no data is found
- ✅ Dark mode toggle with aria-labels
- ✅ Keyboard-accessible modal and buttons

### Code Quality
- ✅ Modular component structure
- ✅ Memoized components where needed
- ✅ Clear function names and reusable logic

--

📬 For any questions, feel free to reach out.

Happy Reviewing! 🚀
