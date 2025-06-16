import { Input, type InputRef } from "antd";
import { BiSearch } from "react-icons/bi";

const CustomSearch = ({
  ref,
  onSearch,
  className = "",
}: {
  ref: React.Ref<InputRef>;
  onSearch?: (value: string) => void;
  className?: string;
}) => {
  const onSearchHandler = (value: string) => {
    if (onSearch) {
      onSearch(value);
    } else {
      console.log(value);
    }
  };
  return (
    <div>
      <div className={`flex items-center justify-center w-full h-16 `}>
        <Input.Search
          ref={ref}
          placeholder="Search for products"
          enterButton={<BiSearch className="text-white" />}
          size="large"
          className={`!h-14 ${className}`}
          onSearch={(value) => onSearchHandler(value)}
        />
      </div>
    </div>
  );
};

export default CustomSearch;
