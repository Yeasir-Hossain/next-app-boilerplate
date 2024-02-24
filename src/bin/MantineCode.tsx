"use client";

import { ColorScheme, Flex, MantineProvider, Stack, Table, Title, useMantineTheme } from "@mantine/core";
import {
  MRT_GlobalFilterTextInput,
  MRT_TablePagination,
  MRT_ToolbarAlertBanner,
  flexRender,
  useMantineReactTable,
  type MRT_ColumnDef
} from "mantine-react-table";
import { useTheme } from "next-themes";

export type Person = {
  name: {
    firstName: string;
    lastName: string;
  };
  address: string;
  city: string;
  state: string;
};

export const data: Person[] = [
  {
    name: {
      firstName: "Christopher",
      lastName: "Lee"
    },
    address: "555 Cedar Street",
    city: "Seattle",
    state: "Washington"
  },
  {
    name: {
      firstName: "Rachel",
      lastName: "Anderson"
    },
    address: "987 Walnut Court",
    city: "New York",
    state: "New York"
  },
  {
    name: {
      firstName: "David",
      lastName: "Garcia"
    },
    address: "654 Maple Avenue",
    city: "Los Angeles",
    state: "California"
  },
  {
    name: {
      firstName: "Zachary",
      lastName: "Davis"
    },
    address: "261 Battle Ford",
    city: "Columbus",
    state: "Ohio"
  },
  {
    name: {
      firstName: "Robert",
      lastName: "Smith"
    },
    address: "566 Brakus Inlet",
    city: "Westerville",
    state: "West Virginia"
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Yan"
    },
    address: "7777 Kuhic Knoll",
    city: "South Linda",
    state: "West Virginia"
  },
  {
    name: {
      firstName: "John",
      lastName: "Upton"
    },
    address: "722 Emie Stream",
    city: "Huntington",
    state: "Washington"
  },
  {
    name: {
      firstName: "Nathan",
      lastName: "Harris"
    },
    address: "1 Kuhic Knoll",
    city: "Ohiowa",
    state: "Nebraska"
  },
  {
    name: {
      firstName: "Emily",
      lastName: "Smith"
    },
    address: "123 Main Street",
    city: "Springfield",
    state: "Illinois"
  },
  {
    name: {
      firstName: "Jessica",
      lastName: "Johnson"
    },
    address: "456 Elm Avenue",
    city: "Portland",
    state: "Oregon"
  },
  {
    name: {
      firstName: "Michael",
      lastName: "Davis"
    },
    address: "789 Oak Lane",
    city: "Austin",
    state: "Texas"
  },
  {
    name: {
      firstName: "Sarah",
      lastName: "Wilson"
    },
    address: "321 Pine Road",
    city: "Denver",
    state: "Colorado"
  }
];

const columns: MRT_ColumnDef<Person>[] = [
  {
    accessorKey: "name.firstName",
    header: "First Name"
  },
  {
    accessorKey: "name.lastName",
    header: "Last Name"
  },
  {
    accessorKey: "address",
    header: "Address"
  },
  {
    accessorKey: "city",
    header: "City"
  },
  {
    accessorKey: "state",
    header: "State"
  }
];

export default function Page() {
  const globalTheme = useMantineTheme();
  const { theme } = useTheme();

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    //MRT display columns can still work, optionally override cell renders with `displayColumnDefOptions`
    enableRowSelection: true,
    initialState: {
      pagination: { pageSize: 5, pageIndex: 0 },
      showGlobalFilter: true
    },
    //customize the MRT components
    mantinePaginationProps: {
      rowsPerPageOptions: ["5", "10", "15"]
    },
    paginationDisplayMode: "pages"
  });

  return (
    <MantineProvider
      theme={{
        ...globalTheme,
        primaryShade: 5,
        colorScheme: (theme as ColorScheme) || "light"
      }}
    >
      <Stack>
        {/* <Divider /> */}
        <Title order={4}>My Custom Headless Table</Title>
        <Flex justify='space-between' align='center'>
          {/**
           * Use MRT components along side your own markup.
           * They just need the `table` instance passed as a prop to work!
           */}
          <MRT_GlobalFilterTextInput table={table} />
          <MRT_TablePagination table={table} />
        </Flex>
        {/* Using Vanilla Mantine Table component here */}
        <Table
          captionSide='top'
          fontSize='md'
          highlightOnHover
          horizontalSpacing='xl'
          striped
          verticalSpacing='xs'
          withBorder
          withColumnBorders
          m='0'
        >
          {/* Use your own markup, customize however you want using the power of TanStack Table */}
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.Header ?? header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.Cell ?? cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <MRT_ToolbarAlertBanner stackAlertBanner table={table} />
      </Stack>
    </MantineProvider>
  );
}
