import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import SearchBox from "../../components/searchBox/SearchBox";
import BookCard from "../../components/bookCard/BookCard";
import "./BookList.css";
import { ACTIVE_STATES } from "../../utils/HeaderConstants";
import { useDataContext } from "../../context/DataContext";

const BookList: React.FC = () => {
  const { data, filterdData, loading, error, setFilterdData } =
    useDataContext();

  useEffect(() => {
    if (data && data.items) {
      setFilterdData({ items: data.items });
    }
  }, [data, setFilterdData]);

  if (loading) return <div>{loading}</div>;
  if (error) return <div>{error}</div>;

  const handleSearch = (searchText: string) => {
    if (!data) {
      console.error("Data/data.volumeInfo undefined");
      return;
    }
    const lowerCaseSearchText = searchText.toLowerCase();
    const filteredBooks = data.items.filter((book) => {
      const { title, authors } = book.volumeInfo;
      return (
        title.toLowerCase().includes(lowerCaseSearchText) ||
        authors.some((author) =>
          author.toLowerCase().includes(lowerCaseSearchText)
        )
      );
    });
    setFilterdData({ items: filteredBooks });
  };

  return (
    <div>
      <Header activeState={ACTIVE_STATES.home} />
      <SearchBox didStartSearch={handleSearch} />
      <div className="book-card-container">
        {loading && <div className="loading">Loading books...</div>}

        {error && <div className="error">{error}</div>}

        {!loading &&
        !error &&
        Array.isArray(filterdData.items) &&
        filterdData.items.length > 0 ? (
          filterdData.items.map((book, index) => (
            <BookCard key={index} bookData={book} />
          ))
        ) : (
          <div className="no-books">No books found</div>
        )}
      </div>
    </div>
  );
};

export default BookList;
