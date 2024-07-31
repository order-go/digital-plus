import type {Category} from "../../constant/data";
import CheckBox from "../atoms/CheckBox";

const FilterMenu=({categories,selectedCategories,onCategoryChange}: {categories: Category[],selectedCategories: string[],onCategoryChange: (category: string) => void}) => {
    return (
        <div className="absolute bg-white text-textSecundary right-0 mr-2 p-4 border-2 border-solid border-primary rounded-lg z-10">
            {categories.map((category: Category) => (
                <CheckBox
                    key={category.id}
                    id={category.name}
                    checked={selectedCategories.includes(category.name)}
                    onChange={(): void => onCategoryChange(category.name)}
                    label={category.name}
                />
            ))}
        </div>
    );
};

export default FilterMenu;
