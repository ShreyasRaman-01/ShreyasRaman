import React, { useCallback, useState } from "react";
import Github from "../../icons/Github";
// import Project_Tag_Bar from "./Project_Tags";

//importing the CSS styling for the project box element
import "./ResearchBox.css";
export interface Filters {
  id: Number;
  name: string;
  color: string;
}
export interface LinkFilters {
  id: Number;
  name: string;
  color: string;
  link: any;
}



interface Props {
  submission_links: Array<LinkFilters>;
  filters: Array<Filters>;
  icon: string;
  alt_icon_name: string;
  name: string;
  catchphrase: string;
  // description: Array<string>;
  github_link: string;
}


//Research Box class containing all the elements for a single research box
const ResearchBox: React.FC<Props> = ({submission_links, filters, icon, alt_icon_name, name, catchphrase, github_link }) => {
  const [selectedPackages, setPackages] = useState<Array<Filters>>([]);
  const [selectedFilters, setFilters] = useState<Array<Filters>>([]);

  return (
    //div containing the project box
    <div className="research-box">
      <div className="header">
        <img src={icon} alt={alt_icon_name} />
        <h3>
          <span className="title">{name}</span>
          <span className="subtitle">{catchphrase}</span>
        </h3>
      </div>

      <ul className="research-tags">
        {submission_links.map((submission: LinkFilters) => (
              <li
                key={submission.color}
                className={`filter ${
                  selectedPackages.some((item) => item.name === submission.name)
                    ? "active-filter"
                    : ""
                }`}
                style={{ background: submission.color }}
              > <a href = {submission.link} style = {{color:"white"}}>
                {submission.name}
                </a>
              </li>
          ))}
      </ul>

      <div className="research-packages">
        <a href={github_link} className="github">
          <Github />
        </a>
        <ul>
          {filters.map((filter: Filters) => (
            <li
              key={filter.color}
              className={`filter filter-package${
                selectedFilters.some((item) => item.name === filter.name)
                  ? "active-filter"
                  : ""
              }`}
              style={{ background: filter.color }}
            >
              {filter.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResearchBox;
