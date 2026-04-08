 Online Library System (React + Vite)

This is a simple and interactive **Online Library System** built using React.
It allows users to browse books, view details, search by category, and add new books.

The project is built as part of a React assignment and focuses on routing, state management using Redux, and clean UI design.

---

 Features

* Home page with categories and popular books
* Browse books by category
* Search books by title or author
* View detailed information of each book
* Add new books using a form
* State management using Redux Toolkit
* 404 page for invalid routes
* Clean and responsive UI

---

 Tech Stack

* React (with Vite)
* React Router DOM
* Redux Toolkit
* CSS (custom styling)

---

## Folder Structure

```
library-app/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── BookCard.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Browse.jsx
│   │   ├── Details.jsx
│   │   ├── AddBook.jsx
│   │   ├── NotFound.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   ├── bookSlice.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│
├── package.json
├── vite.config.js
```

---

##  How to Run the Project

Follow these steps to run the application locally:

### 1. Clone the repository

```
git clone <your-repo-link>
```

### 2. Navigate to the project folder

```
cd library-app
```

### 3. Install dependencies

```
npm install
```

### 4. Start the development server

```
npm run dev
```

### 5. Open in browser

Once the server starts, open:

```
http://localhost:5173/
```

---

##  Adding a New Book

* Go to the **Add Book** page from the navbar
* Fill all required fields
* Click on **Add Book**
* The book will appear in the Browse page

---
