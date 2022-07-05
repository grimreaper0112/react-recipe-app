import React from "react";
import style from "./Recipe.module.css"

const Recipe = ({title, calories, image, cuisineType, mealType, dishType, source, url}) => {
    return(
        <a className={style.recipeCard} href={url} >
            <img src={image} alt={title} />
            <div>
                <h1>{title}</h1>
                <p>Source: {source}<br/>{calories.toFixed(2)} calories</p>
            </div>
            <ol className="recipeCategories">
                <li>{cuisineType}</li>
                <li>{mealType}</li>
                <li>{dishType}</li>
            </ol>
        </a>
    )
};

export default Recipe;