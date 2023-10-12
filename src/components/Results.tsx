import React from 'react';

interface PhotoData {
  id: string;
  links: {
    html: string;
  };
  urls: {
    regular: string;
  };
  alt_description: string;
}

interface ResultsProps {
  photo: PhotoData[];
  result: boolean;
  word: string;
}

const Results: React.FC<ResultsProps> = ({photo, result, word}) => {
  return (
    <>
      {word && <h2 className='search-title'>{result && `「${word}」の画像検索結果`}</h2>}
      <ul className="photo-list">
        {photo.map((singleData) =>
          <li className="photo-item" key={singleData.id}>
            <a href={singleData.links.html} target="_blank" rel="noreferrer">
              <img src={singleData.urls.regular} alt={singleData.alt_description} />
            </a>
          </li>
        )}
      </ul>
    </>
  );
};

export default Results;