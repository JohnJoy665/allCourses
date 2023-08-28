import {data, dataTag} from "../types/types";

export const dateSort = (data: data[]) => {
  const newArr = data.slice();
  const sortedDataByLiteral = newArr.sort((a: data, b: data) => a.name > b.name ? 1 : -1);
  const activeCourses = sortedDataByLiteral.filter((item: data) => item.status === "publish" && item.yourself_start === "1");
  return activeCourses;
};

export const setOriginFilterList = (data: data[]) => {
  const result: Array<dataTag> = [];
  data.forEach((courseItem: data) => {
    courseItem.tags.forEach((tagsItem: dataTag) => {
      if (result.length === 0) {
        result.push(tagsItem);
      } else {
        const isUniq = result.find(
          (resultItem: dataTag) => resultItem.tag_id === tagsItem.tag_id
        );
        if (!isUniq) {
          result.push(tagsItem);
        }
      }
    });
  });
  result.sort((a: dataTag, b: dataTag) => {
    if(a.tag_name === "Без категории") return -1;
    if(b.tag_name === "Без категории") return 1;
    return a.tag_name > b.tag_name ? 1 : -1;
  });
  return result;
};

export const setCoursesOfTagId = (mainData: data[], tag_id: string, ) => {
  const result: data[] = [];
  if (tag_id === "") {
    result.push(...mainData);
  } else {
    mainData.forEach((courseItem:data) => {
      const isFind = courseItem.tags.find((tagsItem: dataTag) => tagsItem.tag_id === tag_id);
      if (isFind) {
        result.push(courseItem);
      }
    });
  }
  return result;
};
