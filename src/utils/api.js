// Fetch blog posts from JSONPlaceholder as example
export async function fetchBlogs() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error('Failed to fetch blogs');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Example fetch for a portfolio API (placeholder)
export async function fetchPortfolio() {
  try {
    // Replace with your real API endpoint
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=12');
    if (!res.ok) throw new Error('Failed to fetch portfolio');
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

// Submit contact form (POST)
export async function submitContact(data) {
  try {
    // Replace URL with your contact endpoint
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('Failed to submit contact');
    return await res.json();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
