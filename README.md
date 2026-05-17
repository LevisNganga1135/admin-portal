#  SuperCar Admin Portal

A React-based administrator portal for a supercar e-commerce store. Built as a summative lab project demonstrating advanced React concepts including state management, client-side routing, data fetching, and testing.

---

## Features

- **Landing Page** — Hero section with feature highlights and navigation
- **Product Listing** — Displays all supercars in a responsive grid with live search
- **Add Product** — Form with validation to add a new supercar with image preview
- **Product Detail** — View, edit, and delete individual supercars
- **Live Search** — Dynamically filters products as you type
- **Responsive Design** — Dark luxury theme optimized for all screen sizes

---

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool and dev server
- **React Router DOM** — Client-side routing
- **JSON Server** — Mock REST API backend
- **Jest** — Testing framework
- **React Testing Library** — Component testing

---

##  Project Structure
---

##  Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/LevisNganga1135/admin-portal.git

# Navigate into the project
cd admin-portal

# Install dependencies
npm install
```

### Running the App

You need two terminals running simultaneously:

**Terminal 1 — Start the mock backend:**
```bash
npm run server
```

**Terminal 2 — Start the React app:**
```bash
npm run dev
```

Then visit `http://localhost:5173` in your browser.

---

##  Running Tests

```bash
npm test
```

**Test coverage includes:**
- Landing page rendering
- Product card display
- Add product form validation
- useFetch custom hook (success and error states)

---

##  API Endpoints

All data is served by JSON Server on `http://localhost:3001`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /products | Fetch all products |
| POST | /products | Add a new product |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

---

##  React Concepts Demonstrated

| Concept | Usage |
|---------|-------|
| `useState` | Form state, edit mode, search query |
| `useEffect` | Data fetching on mount |
| `useRef` | Auto-focus search input |
| `useId` | Accessible label/input pairing |
| `useContext` | Global product state access |
| Custom Hook | `useFetch` for reusable data fetching |
| Context API | `ProductContext` for global state |
| React Router | 4 routes with dynamic `:id` param |

---

##  Git Workflow

This project followed a feature-branch workflow:

- `feature/setup` — Project initialization and folder structure
- `feature/routing` — React Router setup and Navbar
- `feature/context` — ProductContext and useProducts hook
- `feature/landing-page` — Landing page component
- `feature/json-server` — Mock backend setup
- `feature/product-list` — Product listing with live search
- `feature/add-product` — Add product form with POST request
- `feature/product-detail` — Product detail with PATCH and DELETE
- `feature/custom-hook` — useFetch custom hook
- `feature/tests` — Jest and React Testing Library test suite
- `feature/styling` — Dark luxury CSS theme

Each branch was merged via Pull Request and deleted after merging.

---

##  Author

**Levis Nganga**
GitHub: [@LevisNganga1135](https://github.com/LevisNganga1135)