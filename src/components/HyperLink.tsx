import Link from 'next/link';

type HyperLinkProps = {
  url: string;
  children: string;
};

export default function HyperLink({url, children}: HyperLinkProps) {
  return (
    <Link href={url}>
      <a target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </Link>
  );
}
