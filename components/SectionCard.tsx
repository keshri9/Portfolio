import { ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  children: ReactNode;
}

export function SectionCard({ title, children }: SectionCardProps) {
  return (
    <div className="  p-6 ">
      <h2 className="text-lg font-semibold text-blue-700 mb-4 pb-3 border-b-2 border-blue-200">
        {title}
      </h2>
      {children}
    </div>
  );
}
