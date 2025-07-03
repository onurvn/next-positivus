import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link
        href="/"
        className="inline-block px-6 py-3 mt-4 bg-black text-white font-medium text-lg rounded shadow"
      >
        Return Home
      </Link>
    </div>
  );
}
