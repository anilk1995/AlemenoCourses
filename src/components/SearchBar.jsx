import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, filterData, settingData } from "../feature/dataSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  useEffect(
    function () {
      dispatch(filterData(query));
      dispatch(setSearchQuery(query));
    },
    [dispatch, query]
  );

  return (
    <input
      type="text"
      placeholder="Search Courses"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default SearchBar;
