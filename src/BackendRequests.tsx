export async function FetchFoodData() {
  const result = await fetch("https://my-json-server.typicode.com/rotanmihyar/sunShine/food");
  return await result.json();
}
