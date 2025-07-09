import React from 'react';

function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="news"
        />
      )}
      <div className="news-card-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="news-card-footer">
          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
