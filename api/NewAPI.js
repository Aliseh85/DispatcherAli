const API_KEY = '56aae10f756e4ceba5849a56afb279a0';

export async function getTopHeadlines() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}
export const newapi =  {getTopHeadlines};