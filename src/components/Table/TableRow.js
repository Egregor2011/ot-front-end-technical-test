import React, { useState } from "react";
import ActiveRow from "./ActiveRow";
import { TableCell, ActiveCell } from "./styles";

export default function TableRow({
  target,
  association_score: { overall, datatypes },
}) {
  const [active, setActive] = useState(false);
  return (
    <>
      <tr>
        <ActiveCell onClick={() => setActive((prev) => !prev)}>
          {active ? "-" : "+"}
        </ActiveCell>
        <TableCell>{target.gene_info.symbol}</TableCell>
        <TableCell>{target.id}</TableCell>
        <TableCell>{target.gene_info.name}</TableCell>
        <TableCell>{overall}</TableCell>
      </tr>
      {active && <ActiveRow {...{ datatypes }} />}
    </>
  );
}
