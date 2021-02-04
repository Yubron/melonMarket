import React, {useEffect} from 'react';
import axios from 'axios';



function PostDetail() {
  
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data));
  }, [])

  return (
    <div className="Detail">
      <article id="content" data-id="1">
        <section id="article-images">
          <img
            src="/images/pic3.png"
            alt="product"
            className="productDetailImage"
          />
        </section>
      </article>
    </div>
  );
}

export default PostDetail;
