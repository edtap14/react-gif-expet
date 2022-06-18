import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
    const [categories, setCategories] = useState([""]);

    const eliminar = () => {
        setCategories([""]);
    };
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
                categories={categories}
            />
            <hr />

            <button onClick={eliminar}>Borrar Todo</button>

            <ol>
                {categories?.map((category) => {
                    return <GifGrid key={category} category={category} />;
                })}
            </ol>
        </div>
    );
};

export default GifExpertApp;
