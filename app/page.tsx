"use client";
import { GET_BOOKS_API_URL } from "./urls";
import Link from "next/link";

interface IndexDataProps {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

const getBooks = async () => {
  const { results } = await (await fetch(GET_BOOKS_API_URL)).json();
  return results;
};

export default async function Index() {
  const results = await getBooks();
  return (
    <div className="main">
      <p>The New York Times Best Seller Explorer</p>
      {results.map((item: IndexDataProps, idx) => (
        <Link
          key={idx}
          className="item"
          href={{
            pathname: `/list/${item.list_name}`,
          }}
        >
          <button>{`${item.display_name}`}</button>
        </Link>
      ))}

      <style jsx>
        {`
          .main {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            max-width: 800px;
            margin: 0 auto;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
            height: 100%;
            background-color: white;
            padding: 0px 50px;
          }

          p {
            grid-column: 1 / -1;
            font-size: 2.5rem;
            font-weight: bold;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
