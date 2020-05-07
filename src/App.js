import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
	const APP_ID = "781ce231";
	const APP_KEY = "6c9187377ecefbaa547c92e55e496b68";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("");

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	useEffect(() => {
		getRecipes();
		// eslint-disable-next-line
	}, [query]);

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
		setSearch("");
	};

	return (
		<div className="App">
			<h1 className="title">Recipe Requests</h1>
			<form onSubmit={getSearch} className="search-form">
				<input
					className="search-bar"
					type="text"
					placeholder="What do you fancy for tea?"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<div className="recipes">
				{recipes.map((recipe) => (
					<Recipe
						key={recipe.recipe.label}
						title={recipe.recipe.label}
						calories={recipe.recipe.calories}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredients}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
