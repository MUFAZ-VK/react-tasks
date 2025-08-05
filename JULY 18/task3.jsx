import React, { useState } from 'react';

function LikeStatus() {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(prevLiked => !prevLiked); 
  };

  return (
    <div>
      <h3>Like Button</h3>
      <button onClick={toggleLike}>
        {liked ? 'Dislike' : 'Like'}
      </button>
      
      <p>
        {liked ? 'You liked' : 'Click to like'}
      </p>
    </div>
  );
}

export default LikeStatus;
