import { Input, type InputRef } from "antd";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchItemWrapper from "./_partial";
import { treatments } from "utils/data";

const CustomSearch = ({
  ref,
  className = "",
}: {
  ref: React.Ref<InputRef>;
  className?: string;
}) => {
  const [query, setQuery] = useState("");

  const filteredResults = query
    ? treatments.filter((item) =>
        item.condition.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full "
      id="search"
    >
      <div className={` flex items-center justify-center w-full h-16 `}>
        <Input.Search
          allowClear
          ref={ref}
          placeholder="Search for products & treatments"
          enterButton={<BiSearch className="text-white" />}
          size="large"
          className={`!h-14 ${className} w-full`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="absolute top-14 z-10 max-w-[350px] w-full">
        <SearchItemWrapper results={filteredResults} />
      </div>
    </div>
  );
};

export default CustomSearch;
