import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1 className={style.title}>{title}</h1>
			<img className={style.image} src={image} alt="" />
			<p>{({ calories } = Math.round(calories))} Calories</p>
			<div className={style.wrapper}>
				<ol className={style.ingredient}>
					{ingredients.map((ingredient) => (
						<li>{ingredient.text}</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Recipe;
