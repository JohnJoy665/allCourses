import FilterBar from "../FilterBar/FilterBar";
import SelectItems from "../SelecItems/SelectItems";
import Title from "../Title/Title";
import style from "./App.module.scss";
import Table from "../TableItems/TableItems";
import { useEffect, useState } from "react";
import { dateSort, setOriginFilterList, setCoursesOfTagId } from "../../utils/utils";
import { Api } from "../../api/Api";
import {data, filterList} from "../../types/types";


function App() {
  const api = Api();
  const [data, setData] = useState<data[]>([]);
  const [filtrList, setFilterList] = useState<filterList[]>();
  const [curFilter, setCurFilter] = useState<string>("");
  const [renderCourses, setRenderCourses] = useState<data[]>();

  useEffect(() => {
    api && api.getCourses().then((data: data[]) => {
      const sortedData = dateSort(data);
      const originFilterList = setOriginFilterList(sortedData);
      setData(sortedData);
      setFilterList(originFilterList);
      setCurFilter(originFilterList[0].tag_id);
    });
  }, [api]);

  useEffect(() => {
    data && setRenderCourses(setCoursesOfTagId(data, curFilter));
  }, [data]);

  const handleClickFilterButton = (tag_id: string) => {
    if (tag_id !== curFilter) {
      setCurFilter(tag_id);
      setRenderCourses(setCoursesOfTagId(data, tag_id));
    }
  };

  const handleSelectCourse = (items:null | data[]) => {
    if (items) {
      setRenderCourses(items);
    } else {
      setRenderCourses(setCoursesOfTagId(data, curFilter));
    }
  };


  return (
    <div className={style.app}>
      <Title />
      {filtrList && <FilterBar listCategory={filtrList} currentFilter={curFilter} handleClick={handleClickFilterButton} />}
      {data && <SelectItems options={data} sendSelectedValues={handleSelectCourse} currentFilter={curFilter}/>}
      {renderCourses && <Table elements={renderCourses}/>}
    </div>
  );
}

export default App;
