import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setText } from "../store";
import axios from "axios";
const Form = () => {
  const [paragraphs, setParagraphs] = useState(4);
  const [includeHTML, setIncludeHTML] = useState("No");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&format=${
          includeHTML === "No" ? "text" : "html"
        }`
      )
      .then((response) => {
        dispatch(setText(response.data));
      });
  }, [paragraphs, includeHTML, dispatch]);

  return (
    <div className="flex justify-start gap-x-5">
      <div className="flex flex-col">
        <label
          htmlFor="paragraphs"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Include HTML
        </label>
        <input
          id="paragraphs"
          type="number"
          min="1"
          value={paragraphs}
          onChange={(e) => setParagraphs(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="includeHtml"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Include HTML
        </label>
        <select
          id="includeHtml"
          value={includeHTML}
          onChange={(e) => setIncludeHTML(e.target.value)}
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
