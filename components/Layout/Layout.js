import Nav from '../Nav';

export default function Layout({ children }) {
  return (
    <div className="font-mono flex flex-col align-center h-full">
      <Nav />

      <main className="bg-green-100 p-5 flex-1">
        <div className="container mx-auto">{children}</div>
      </main>

      <footer className="bg-blue-100 p-5 text-gray-900 text-center">
        &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
}
