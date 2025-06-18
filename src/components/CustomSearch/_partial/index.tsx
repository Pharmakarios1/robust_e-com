import { Link } from "react-router";

const SearchItemWrapper = ({
  results,
}: {
  results: Array<{ id: number; condition: string }>;
}) => {
  if (results.length === 0) {
    return;
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-[350]">
      <div className="space-y-2 flex flex-col">
        {results.slice(0, 6).map((item) => (
          <Link to={`/treatment/${item.id}`}
            key={item.id}
            className="hover:cursor-pointer rounded-md hover:bg-gray-200 transition-colors duration-200 p-1"
          >
            <span className="text-sm">{item.condition}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchItemWrapper;
