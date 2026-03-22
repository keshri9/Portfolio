type ListItem = {
  text: string
}

type BulletListProps = {
  items: ListItem[]
}

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="list-disc pl-6 space-y-2 text-gray-800">
      {items.map((item, index) => (
        <li key={index}>{item.text}</li>
      ))}
    </ul>
  )
}