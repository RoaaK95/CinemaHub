import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

function SortSelector({ sortOrder, onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: "popularity.desc", label: "Popularity" },
    { value: "vote_average.desc", label: "Average Rating" },
    { value: "primary_release_date.desc", label: "Release Date" },
    { value: "vote_count.desc", label: "Vote Count" },
    { value: "revenue.desc", label: "Revenue" },
    { value: "original_title.asc", label: "Title (A-Z)" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder,
  );

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Order by: {currentSortOrder?.label || "Popularity"}
          <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map((order) => (
              <Menu.Item
                key={order.value}
                value={order.value}
                onClick={() => onSelectSortOrder(order.value)}
              >
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}

export default SortSelector;
