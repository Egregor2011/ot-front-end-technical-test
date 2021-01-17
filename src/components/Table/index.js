import React from "react";
import useFetch from "../../hooks/useFetch";
import LoadingBar from "../LoadingBar";
import { getTableData } from "../../utils";
import { StyledTable, TableTitle, TableHeader } from "./styles";
import TableRow from "./TableRow";
import { headers, title } from "../../locales";

export default function Table() {
  const { data, loading } = useFetch("https://demo6922545.mockable.io/");
  const tableData = getTableData(data);

  return loading ? (
    <LoadingBar />
  ) : (
    <>
      <TableTitle>{title}</TableTitle>
      <StyledTable>
        <thead>
          <tr>
            {headers.map((header) => (
              <TableHeader>{header}</TableHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ target, association_score }) => (
            <TableRow key={target.id} {...{ target, association_score }} />
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}
