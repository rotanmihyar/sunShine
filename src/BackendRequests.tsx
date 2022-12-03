export async function FetchFoodData(){

  const result = await fetch("http://localhost:3000/food");
        const body = await result.json();
  return body;
}