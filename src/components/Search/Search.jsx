import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
console.log('I RUN WITH EVERY RENDER')
  useEffect(() => {
    console.log("I ONLY RUN ONCE");
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(evt) => setTerm(evt.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
