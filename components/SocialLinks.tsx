'use client';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface SocialLinksProps {
  links: SocialLink[];
}

export function SocialLinks({ links }: SocialLinksProps) {
  // const iconMap: Record<string, string> = {
  //   ORCID: '🔗',
  //   'Google Scholar': '📚',
  //   Scopus: '📊',
  //   Vidwan: '🎓',
  //   ResearchGate: '🌐',
  // };

  return (
    <div className="flex gap-3 mt-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          title={link.name}
          className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-700 transition-colors shadow-sm"
          aria-label={link.name}
        >
          <span className="text-sm font-semibold">
            {  link.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
