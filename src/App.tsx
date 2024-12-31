import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./pages/bookList/BookList";
import BookDetail from "./components/bookDetail/BookDetail";
import Home from "./pages/home/Home";
import { DataProvider } from "./context/DataContext";
import BillingPage from "./pages/billingPage/BillingPage";

const App: React.FC = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/bookdetail/:bookID" element={<BookDetail />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
