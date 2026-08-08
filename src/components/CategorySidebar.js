import categories from "../data/categories.json";
import "../styles/CategorySidebar.css";

const CategorySidebar = ({
  selectedCategories,
  handleCategoryChange,
}) => {
  return (
    <aside className="category-sidebar">

      <h2 className="category-title">
        Shop by Category
      </h2>

      <div className="category-list">

        {categories.map((category) => (

          <label
            key={category.id}
            className="category-item"
          >

            <input
              type="checkbox"
              checked={selectedCategories.includes(category.name)}
              onChange={() =>
                handleCategoryChange(category.name)
              }
            />

            <span>{category.name}</span>

          </label>

        ))}

      </div>

    </aside>
  );
};

export default CategorySidebar;