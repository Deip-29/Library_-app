
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { id: 1, title: "Atomic Habits", author: "James Clear", category: "Self-Help", desc: "Build better habits.", rating: 4.8 },
    { id: 2, title: "Dune", author: "Frank Herbert", category: "Sci-Fi", desc: "Epic sci-fi saga.", rating: 4.7 },
    { id: 3, title: "Harry Potter", author: "J.K. Rowling", category: "Fantasy", desc: "Wizarding world.", rating: 4.9 },
    { id: 4, title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", desc: "Follow your dreams.", rating: 4.5 },
    { id: 5, title: "Clean Code", author: "Robert C. Martin", category: "Programming", desc: "Best coding practices.", rating: 4.8 },

    { id: 6, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", desc: "Financial mindset.", rating: 4.6 },
    { id: 7, title: "Ikigai", author: "Hector Garcia", category: "Self-Help", desc: "Purpose of life.", rating: 4.4 },
    { id: 8, title: "Sapiens", author: "Yuval Noah Harari", category: "History", desc: "Human evolution.", rating: 4.7 },
    { id: 9, title: "Deep Work", author: "Cal Newport", category: "Productivity", desc: "Focus deeply.", rating: 4.6 },
    { id: 10, title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", desc: "Adventure journey.", rating: 4.8 },

    { id: 11, title: "1984", author: "George Orwell", category: "Fiction", desc: "Dystopian society.", rating: 4.7 },
    { id: 12, title: "The Pragmatic Programmer", author: "Andrew Hunt", category: "Programming", desc: "Developer mindset.", rating: 4.9 },
    { id: 13, title: "Zero to One", author: "Peter Thiel", category: "Business", desc: "Startup thinking.", rating: 4.5 },
    { id: 14, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", desc: "Success mindset.", rating: 4.6 },
    { id: 15, title: "The Power of Now", author: "Eckhart Tolle", category: "Self-Help", desc: "Live in present.", rating: 4.4 },

    { id: 16, title: "Start With Why", author: "Simon Sinek", category: "Business", desc: "Purpose-driven leadership.", rating: 4.7 },
    { id: 17, title: "The Lean Startup", author: "Eric Ries", category: "Business", desc: "Startup methodology.", rating: 4.6 },
    { id: 18, title: "Cracking the Coding Interview", author: "Gayle Laakmann", category: "Programming", desc: "Interview prep.", rating: 4.8 },
    { id: 19, title: "The Martian", author: "Andy Weir", category: "Sci-Fi", desc: "Survival on Mars.", rating: 4.7 },
    { id: 20, title: "To Kill a Mockingbird", author: "Harper Lee", category: "Fiction", desc: "Classic novel.", rating: 4.9 },

    { id: 21, title: "A Brief History of Time", author: "Stephen Hawking", category: "Science", desc: "Universe explained.", rating: 4.6 },
    { id: 22, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", desc: "Money behavior.", rating: 4.8 },
    { id: 23, title: "The Silent Patient", author: "Alex Michaelides", category: "Thriller", desc: "Psychological thriller.", rating: 4.5 },
    { id: 24, title: "Educated", author: "Tara Westover", category: "Biography", desc: "Memoir story.", rating: 4.7 },
    { id: 25, title: "The Subtle Art", author: "Mark Manson", category: "Self-Help", desc: "Practical advice.", rating: 4.4 },

    { id: 26, title: "Can't Hurt Me", author: "David Goggins", category: "Motivation", desc: "Mental toughness.", rating: 4.9 },
    { id: 27, title: "The Shining", author: "Stephen King", category: "Horror", desc: "Haunted hotel.", rating: 4.6 },
    { id: 28, title: "Frankenstein", author: "Mary Shelley", category: "Horror", desc: "Classic horror.", rating: 4.5 },
    { id: 29, title: "The Da Vinci Code", author: "Dan Brown", category: "Thriller", desc: "Mystery thriller.", rating: 4.6 },
    { id: 30, title: "Steve Jobs", author: "Walter Isaacson", category: "Biography", desc: "Life of Jobs.", rating: 4.8 },

    { id: 31, title: "The Art of War", author: "Sun Tzu", category: "Strategy", desc: "Ancient strategies.", rating: 4.7 },
    { id: 32, title: "Grit", author: "Angela Duckworth", category: "Self-Help", desc: "Power of passion.", rating: 4.5 },
    { id: 33, title: "Thinking Fast and Slow", author: "Daniel Kahneman", category: "Psychology", desc: "Decision making.", rating: 4.6 },
    { id: 34, title: "The 4-Hour Workweek", author: "Tim Ferriss", category: "Lifestyle", desc: "Work smart.", rating: 4.4 },
    { id: 35, title: "Digital Minimalism", author: "Cal Newport", category: "Productivity", desc: "Focus life.", rating: 4.5 }
  ],
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.list.unshift(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;