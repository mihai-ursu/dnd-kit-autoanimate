import { Card } from "@/data/cards";
import { cn } from "@/utils/cn";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableItem = ({ item }: { item: Card }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });

  const isItemPressed = attributes["aria-pressed"] === true;

  const style = {
    transform: CSS.Transform.toString(transform),
    zIndex: isItemPressed ? 10 : 0,
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn(
        "w-96 cursor-grab rounded-md border bg-white p-4",
        isItemPressed ? "cursor-grabbing shadow-lg" : "",
      )}
    >
      {item.title}
      <p>{item.content}</p>
    </div>
  );
};

export default SortableItem;
