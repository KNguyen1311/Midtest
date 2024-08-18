import React from 'react';
import Explore from './Explore';

function NewRealase({ onSelectMovie }) {
  const animeList = [
    { title: 'One Piece', episode: '1018', img: 'Onepiece.jpg' },
    { title: 'Boruto', episode: '250', img: 'Boruto.jpg' },
    { title: 'Spy X Family', episode: '07', img: 'Spycard.jpg' },
    { title: 'Shingeki no kyojin', episode: '28', img: 'Attack.png' },
    { title: 'Captain Tsubasa', episode: '28', img: 'Captain.jpg' },
    { title: 'Aoashi', episode: '28', img: 'Aoshi.jpg' },
  ];

  return (
    <section className="new-releases">
      <h2>New Release</h2>
      <div className="anime-list">
        {animeList.map((anime, index) => (
          <div key={index} className="anime-card" onClick={() =>  onSelectMovie(anime)}>
            <img src={anime.img} alt={anime.title} />
            <p>{anime.title} <br /> Episode {anime.episode}</p>
          </div>
        ))}
        
      </div>

      
    </section>
  );
}

export default NewRealase;