export async function FetchFoodData() {
  const result = await fetch("http://localhost:3000/food");
  return await result.json();
}
