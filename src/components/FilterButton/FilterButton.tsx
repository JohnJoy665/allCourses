import style from "../App/App.module.scss";

interface FilterButtinProps {
  id: string | null,
  name: string,
  activeElement: string,
  handleClick: (e: string | null) => void
}

const FilterButton = ({ id = null, name, activeElement, handleClick }: FilterButtinProps) => {
  const isActive = id === activeElement ? true : false;

  return (
    <>
      {<div onClick={() => handleClick(id)} className={`${style.filterBar__btn} ${isActive ? style.filterBar__btn_active : ""}`}>{name}</div> }
    </>
  );
};

export default FilterButton;
