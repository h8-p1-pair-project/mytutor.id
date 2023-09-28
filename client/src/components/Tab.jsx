import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

// const tabs = {
//     id : number,
//     name: string,
//     component: jsx,
// }

function Tab({ tabs }) {
  const [query, setQuery] = useSearchParams({});
  const [activeTab, setActiveTab] = useState(
    query.get("tabIndex") ? tabs.find((tab) => tab.id === +query.get("tabIndex")) : tabs[0]
  );

  return (
    <div className="tab">
      <div className="tab-button-container">
        {tabs.map((tab) => (
          <button
            key={`tab ${tab.id}`}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              query.set("tabIndex", tab.id)
              setQuery(query)
              setActiveTab(tabs.find(tab => tab.id === +query.get("tabIndex")));
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="tab-content">
        { activeTab ? activeTab.component : "Tab unavailable" }
      </div>
    </div>
  );
}

export default Tab;
