import React, { useState } from "react";

import Button from "../components/button";
import Collection from "../components/collection";
import Search from "../components/search";

const FrontPage = () => {
  const [inputValue, setInputValue] = useState("value");
  return (
    <div className="front">
      <div className="front__search">
        <Search onKeyUp={(event) => setInputValue(event.target.value)} />
        <Button text="Create note" onClick={() => setInputValue(true)}>
          Click to Search
        </Button>
      </div>
      <div className="front__colections">
        <Collection />
        <Collection />
        <Collection />
      </div>
    </div>
  );
};

export default FrontPage;
