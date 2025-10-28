const url = "https://dummyjson.com/recipes";

fetch(url)
  .then(res => res.json())
  .then(data => {
    const recipes = data.recipes;

    let table = `
      <table>
        <tr>
          <th>Sr No</th>
          <th>Name</th>
          <th>Action</th>
          <th>Image</th>
          <th>Rating</th>
          <th>Price</th>
        </tr>
    `;

    recipes.forEach((recipe, index) => {
      table += `
        <tr>
          <td>${index + 1}</td>
          <td>${recipe.name}</td>
          <td><button onclick="alert('You ordered: ${recipe.name}')">Order Now</button></td>
          <td><img src="${recipe.image}" width="100" height="80"></td>
          <td>${recipe.rating}</td>
          <td>$${recipe.id * 10}</td> 
        </tr>
      `;
      // price not given in API, so I generated a dummy price (id * 10)
    });

    `table += </table>`
    document.getElementById("menu").innerHTML = table;
  })
  .catch(err => console.log("Error:", err.message))
  .finally(() => console.log("Finished loading menu"));