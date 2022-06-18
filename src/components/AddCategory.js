import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories, categories }) => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const onAddCategory = (e) => {
		e.preventDefault();
		if (inputValue !== "") {
			setCategories([inputValue, ...categories]);
			setInputValue("");
		}
	};



	return (
		<>
			<form onSubmit={onAddCategory}>
				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					name="input"
				/>
				<button onClick={onAddCategory}>Agregar</button>
			</form>
		</>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
	categories: PropTypes.array.isRequired,
};

export default AddCategory;
