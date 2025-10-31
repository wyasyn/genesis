import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

export function BlogItems() {
  const cards = [
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
    {
      title: "Sick title",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
    },
  ];
  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2  gap-6">
      {cards.map((card, idx) => (
        <MinimalCard key={idx}>
          <MinimalCardImage
            src="https://res.cloudinary.com/dkdteb9m5/image/upload/v1739381889/original-f9ab5d5fc69d626bc9885ff08742b654_hvg6ly.webp"
            alt={card.title}
          />
          <MinimalCardTitle>{card.title}</MinimalCardTitle>
          <MinimalCardDescription>{card.description}</MinimalCardDescription>
        </MinimalCard>
      ))}
    </div>
  );
}
