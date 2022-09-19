import { useSelector } from "react-redux";
const Content = () => {
  const content = useSelector((state) => state.text);

  return <div className="text-white bg-[#303030] p-5 container">{content}</div>;
};

export default Content;
