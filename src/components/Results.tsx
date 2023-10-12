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
}

const Results: React.FC<ResultsProps> = ({photo}) => {
  return (
    <>
      <ul className="photo-list">
        {photo.map((singleData) =>
          <li className="photo-item" key={singleData.id}>
            <a href={singleData.links.html} target="_blank">
              <img src={singleData.urls.regular} alt={singleData.alt_description} />
            </a>
          </li>
        )}
      </ul>
    </>
  );
};

export default Results;