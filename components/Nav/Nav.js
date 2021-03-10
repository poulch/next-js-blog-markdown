import Link from 'next/link';

const navLinks = [
  {
    id: 1,
    path: '/',
    label: 'Blog'
  },
  {
    id: 2,
    path: '/projects',
    label: 'Project'
  }
];

export default function Nav() {
  return (
    <nav className="bg-blue-400 p-5 flex justify-center">
      {navLinks.map(({ id, path, label }) => (
        <Link href={path} key={id}>
          <a className="shadow md:w-40 bg-blue-50 p-2 m-2 text-center hover:bg-gray-50">{label}</a>
        </Link>
      ))}
    </nav>
  );
}
