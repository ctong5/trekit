import React from 'react';

const HikeItem = (props) => {
  const {
    name,
    imgSmallMed,
    location,
    stars,
    summary,
  } = props;

  return (
    <div className='flipCard'>
      <div className='flipCardInner'>
        
        <div className='flipCardFront'>
          <div><img className='hikeImg' src={imgSmallMed} alt={`${name}`}/></div>
          <div className='hikeName'>{name}</div>
        </div>

        <div className='flipCardBack'>
          <div>{location}</div>
          <div>Rating: {stars}</div>
          <div>{summary}</div>
        </div>

      </div>
    </div>
  )
}

export default HikeItem;