import React, { useState, useEffect } from 'react';
import './App.css';
import NewsCard from './components/NewsCard';
import FilterBar from './components/FilterBar';
import SearchBar from './components/SearchBar';


const API_KEY = 'a7899bcdaaaf46af8b7b8676ec574150'; // Replace with your NewsAPI key

function App() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [country, setCountry] = useState('in');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchNews();
  }, [category, country]);

  const fetchNews = async () => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
    if (query.trim() !== '') {
      url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`;
    }
    try {
      const res = await fetch(url);
      const data = await res.json();
      setArticles(data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
      setArticles([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header className="header">
        <h1>📰 News Aggregator</h1>
        <p>Stay updated with the latest news from around the world</p>
      </header>
      
      <div className="toolbar">
        <SearchBar setQuery={setQuery} fetchNews={fetchNews} />
        <FilterBar setCategory={setCategory} setCountry={setCountry} />
      </div>
      
      <div className="news-container">
        {loading ? (
          <div className="grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="skeleton-card">
                <div className="skeleton-image skeleton"></div>
                <div className="skeleton-content">
                  <div className="skeleton-title skeleton"></div>
                  <div className="skeleton-text skeleton"></div>
                  <div className="skeleton-text skeleton"></div>
                  <div className="skeleton-text skeleton"></div>
                </div>
              </div>
            ))}
          </div>
        ) : articles.length === 0 ? (
          <p className="no-news">No news found. Try changing filters or search keyword.</p>
        ) : (
          <div className="grid">
            {articles.map((article, index) => (
              <NewsCard key={index} article={article} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
