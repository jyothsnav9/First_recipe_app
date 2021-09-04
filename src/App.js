import { useState } from "react";
import "./styles.css";

export default function App() {
  const initialRecipe = [
    {
      img:
        "https://www.indianhealthyrecipes.com/wp-content/uploads/2017/05/aloo-tikki-recipe-1.jpg",
      RecipeName: "Aloo Tikki",
      Ingredients: [
        "4 medium potatoes ((450 to 500 grams))",
        "1 teaspoon ginger paste (or ¼ tsp ginger powder)",
        "¾ teaspoon garam masala (or any spice powder)",
        "½ teaspoon chaat masala",
        "½ to ¾ teaspoon red chili powder"
      ],
      Process: [
        "Aloo tikki is a popular Indian street food snack made with boiled potatoes aromatic spices and herbs. Aloo is the Hindi name for potatoes and tikki is a patty. So aloo tikki literally translates to potato patties."
      ]
    }
  ];
  const [recipe] = useState(initialRecipe);
  return (
    <div className="RecipeApp">
      <RecipeTypes
        img="https://www.indianhealthyrecipes.com/wp-content/uploads/2017/03/gobi-manchurian-1.jpg"
        RecipeName="Gobi Manchurian"
        Ingredients="250 grams cauliflower (florets (gobi cleaned))
        ½ cup all-purpose flour ((maida, prefer organic or at least unbleached))
        ¼ cup cornstarch ((white corn flour or yellow corn flour))
        ½ to 1 teaspoon red chilli powder (or paste (less spicy variety) (optional))
        ¼ teaspoon black pepper (crushed or ground)"
        Preparation="Double the amount of chilli sauce, sugar, vinegar and tomato sauce. Use red chilli powder as required. I double it.
        Mix 1 tsp corn flour with half cup water. Stir in to the bubbling sauces. Taste and adjust the sweet, spice & tang."
        Process="There are two different variants of Manchurian, dry and with gravy. Both variants are prepared by using common ingredients like corn flour, maida flour, spring onion, bell peppers, soy sauce, chili sauce, minced garlic, ground pepper, etc. and has typical garnish of spring onion."
      />
      <RecipeTypes
        img="https://static.toiimg.com/thumb/54408184.cms?imgsize=148310&width=800&height=800"
        RecipeName="Paneer Tikka Masala"
        Ingredients="1/2 teaspoon ginger paste
        1/2 teaspoon garlic paste
        1 teaspoon lime juice
        1/2 teaspoon chaat masala
        1/2 teaspoon cumin powder"
        Preparation="Quick Flavorful Plant-Based Dishes Made Easy Manali Singh, founder of the popular blog Cook with Manali, shares her secrets to making your favorite traditional Indian dishes faster and healthier in your Instant Pot® or other multifunction"
        Process="With a special focus on kabab recipes, be they of chicken, mutton, seafood, cottage cheese or vegetables, this book is a must-buy for those who cannot resist recreating the Moti Mahal magic at home."
      />

      {recipe.map((detail) => (
        <RecipeTypes
          img={detail.img}
          RecipeName={detail.RecipeName}
          Ingredients={detail.Ingredients}
          Preparation={detail.Preparation}
          Process={detail.Process}
        />
      ))}
    </div>
  );
}

function RecipeTypes(props) {
  return (
    <div className="button">
      <img className="img" src={props.img} alt=""></img>
      <h3 className="title"> {props.RecipeName} </h3>
      <p className="title"> INGREDIENENTS: {props.Ingredients} </p>
      <p className="title"> PREPARATION: {props.Preparation} </p>
      <p className="title"> PROCESS: {props.Process} </p>
    </div>
  );
}
