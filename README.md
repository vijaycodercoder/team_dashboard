# 👥 Team Dashboard – Frontend Assessment (Sep 2025)

A responsive React + TypeScript dashboard built using **Shadcn/UI**, **Tailwind CSS**, and **Redux Toolkit** to showcase team member cards, search/filter functionality, and modal detail views.

---

## 🚀 Tech Stack

- ⚛️ React + Vite (TypeScript)
- 🎨 Tailwind CSS + Shadcn/UI (Radix-based UI)
- 🧠 Redux Toolkit (for state management)
- 📦 Modular folder structure
- 💡 Fully responsive layout

---

## 🎯 Features

- ✅ Responsive card-based layout for team members
- 🔍 Live search by member name (min. 2 characters)
- 🎯 Role-based filter dropdown (Designer, Developer, Manager)
- 📄 Modal with tabs:
  - **Profile** (bio, email, phone, total projects)
  - **Projects** (list of assigned projects)
- ⚡ Smooth modal animations and transitions
- 📱 Mobile-first, works well across screen sizes

---

## 📂 Folder Structure

\`\`\`
src/
├── assets/              # Images
├── components/
│   ├── MemberCard.tsx
│   ├── MemberModal.tsx
│   └── SearchFilter.tsx
├── components/ui/       # Shadcn/UI overrides
├── data/
│   └── members.ts       # Static team data
├── features/
│   └── BasicSlice.ts    # Redux slice
├── Pages/
│   └── Dashboard.tsx
├── App.tsx
└── main.tsx
\`\`\`

---

## 🛠️ Installation & Usage

\`\`\`bash
# 1. Clone the repository
git clone https://git@github.com:vijaycodercoder/team_dashboard.git
cd team-dashboard

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Assessment Criteria Met

| Requirement                         | Status  |
|-------------------------------------|---------|
| Member cards with avatar, role      | ✅       |
| Modal on card click                 | ✅       |
| Profile + Projects tabs             | ✅       |
| Search by name (min 2 chars)        | ✅       |
| Filter by role dropdown             | ✅       |
| Simultaneous filter + search        | ✅       |
| Modal opens even on same member     | ✅       |
| Responsive layout (mobile/desktop)  | ✅       |
| Shadcn/UI + Tailwind used           | ✅       |
| Code well-organized & modular       | ✅       |

---

## 📌 Approach

- Used **Redux Toolkit** to manage both original and filtered member data.
- Search input and role dropdown update Redux state in sync.
- Modal opens on card click with correct data and tabs.
- Reused `MemberCard` and `MemberModal` for maintainability.
- `Dialog`, `Tabs`, `Avatar`, `Badge`, etc., all sourced from **Shadcn/UI**.
- UI is responsive, lightweight, and visually consistent.

---

## 👨‍💻 Author

**Your Name**  
Frontend Developer  
GitHub: [@vijaycodercoder](https://github.com/vijaycodercoder)

---

## 📬 Submission

✅ All requested features are implemented.  
📁 Ready for GitHub push & submission.

---