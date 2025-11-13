const API_URL = "https://api.unsplash.com";

export const fetchImages = async (query, page = 1) => {
  try {
    const response = await fetch(
      `${API_URL}/search/photos?query=${query}&page=${page}&per_page=12&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`
    );

    // If something went wrong (bad API key, etc.)
    if (!response.ok) {
      console.error("Unsplash API error:", response.statusText);
      return [];
    }

    const data = await response.json();
    return data.results || []; // <-- always return an array
  } catch (error) {
    console.error("Error fetching images:", error);
    return []; // <-- return empty array on any error
  }
};



