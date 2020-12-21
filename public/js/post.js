const postCommentHandler = async (event) => {
  event.preventDefault();

  // Collect values from the form
  const comment = document.querySelector('#comment').value.trim();
  const postId = document.querySelector("#post").value;
  
  if (comment.length > 0) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/posts/'+postId+"/comment", {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the post page
      document.location.replace('/post/'+postId);
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.post-comment')
  .addEventListener('submit', postCommentHandler);