// znajdujemy listę kategorii po ID
const categoryList = document.querySelector("#categories");

// znajdujemy wszystkie elementy kategorii
const categories = categoryList.querySelectorAll("li.item");

// wypisujemy liczbę kategorii w konsoli
console.log(`Number of categories: ${categories.length}`);

// iterujemy przez każdą kategorię
categories.forEach((category) => {
  // znajdujemy nagłówek kategorii i liczbę elementów
  const header = category.querySelector("h2");
  const elements = category.querySelectorAll("li");

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
