import type { ComponentType } from 'react';

type Props<T> = {
  items: T[];
  Card: ComponentType<{ item: T }>;
};

export function ItemList<T extends { id: number }>(props: Props<T>) {
  const { items, Card } = props;
  return (
    <>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </>
  );
}
