declare module 'react-table' {
    import { ReactNode } from "react";
  
    export interface Column<T extends object> {
      Header: string;
      accessor: keyof T | ((row: T) => ReactNode);
    }
  
    export interface TableInstance<T extends object> {
      getTableProps: () => object;
      getTableBodyProps: () => object;
      headerGroups: HeaderGroup<T>[];
      rows: Row<T>[];
      prepareRow: (row: Row<T>) => void;
    }
  
    export interface HeaderGroup<T extends object> {
      getHeaderGroupProps: () => object;
      headers: Column<T>[];
    }
  
    export interface Row<T extends object> {
      getRowProps: () => object;
      cells: { getCellProps: () => object; render: (type: string) => ReactNode }[];
    }
  
    export function useTable<T extends object>(props: {
      columns: Column<T>[];
      data: T[];
    }): TableInstance<T>;
  }
  