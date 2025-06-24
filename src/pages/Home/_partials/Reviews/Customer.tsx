const Customer = ({
  title,
  author,
  rating,
  content,
}: {
  title: string;
  author: string;
  rating: string;
  content: string;
}) => {
  return (
    <div>
      <div className="flex flex-col items-center p-3 relative shadow-xl w-72 h-44 rounded-md">
        <div className="flex items-center gap-2">
          <p className=""> {rating}</p>
          <p>{title}</p>
        </div>
        <h3 className="font-bold my-3">{content}</h3>
        <p className=" absolute bottom-0 right-2">{author}</p>
      </div>
    </div>
  );
};

export default Customer;
