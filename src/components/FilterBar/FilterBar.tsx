import FilterButton from "../FilterButton/FilterButton";
import style from "./FilterBar.module.scss";
import {filterList} from "../../types/types";


interface FilterBarProps {
  listCategory: filterList[]
  currentFilter: string
  handleClick(e: string | null): void
}

const FilterBar = ({ listCategory, currentFilter, handleClick }: FilterBarProps) => {


  return (
    <div className={style.filterBar}>
      <ul className={style.filterBar__list}>
        {listCategory.map((item: {tag_id: string, tag_name: string}) => (
          <FilterButton
            key={item.tag_id}
            id={item.tag_id}
            name={item.tag_name}
            activeElement={currentFilter}
            handleClick={() => handleClick(item.tag_id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilterBar;
