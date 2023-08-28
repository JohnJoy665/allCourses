import { MantineProvider, Table } from "@mantine/core";
import style from "../App/App.module.scss";
import IconContainer from "../IconContainer/IconContainer";
import { Link } from "react-router-dom";
import {data} from "../../types/types";

interface TableProps {
  elements: data[]
}



const TableItems = ({ elements }: TableProps) => {
  const rows = elements.map((element: { id: string, name: string }) => (
    <tr key={element.id} className={style.tableItem__row} >
      <Link className={style.tableItem__link} to={`${location.origin}/_wt/${element.id}`}>
        <td className={style.tableItem__rowElem}>
          <IconContainer icon={"ph:link-simple-bold"} color="#E31683" sizeWidth={"16"} sizeHeight={"16"} styleMod={""} />
          {element.name}
        </td>
      </Link>
    </tr>
  ));



  // const rows = elements.map((element) => (
  //   <tr key={element.id} >
  //     <td onClick={(e) => handleClick(e, element.id)}>
  //       <IconContainer icon={"ph:link-simple-bold"} color="#E31683" sizeWidth={"16"} sizeHeight={"16"} styleMod={""} />
  //       {element.itemName}
  //     </td>
  //   </tr>
  // ));


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Table className={style.tableItem} >
        <tbody>{rows}</tbody>
      </Table>
    </MantineProvider>
  );
};

export default TableItems;



// verticalSpacing="10px" horizontalSpacing="40px"
