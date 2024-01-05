import React, { useCallback, useState } from "react";
import Github from "../../icons/Github";
// import Project_Tag_Bar from "./Project_Tags";

//importing the CSS styling for the project box element
import "./ProjectBox.css";
export interface Filters {
  name: string;
  color: string;
}



interface Props {
  packages: Array<Filters>;
  filters: Array<Filters>;
  icon: string;
  alt_icon_name: string;
  name: string;
  catchphrase: string;
  description: Array<string>;
  github_link: string;
}

//Project Box class containing all the elements for a single project box
const ProjectBox: React.FC<Props> = ({ packages, filters, icon, alt_icon_name, name, catchphrase, description, github_link }) => {
  const [selectedPackages, setPackages] = useState<Array<Filters>>([]);
  const [selectedFilters, setFilters] = useState<Array<Filters>>([]);

  const onOptionSelect = useCallback(
    (packageItem: Filters) => {
      const currentItemIndex = selectedPackages.findIndex(
        (item: any) => item.name === packageItem.name
      );

      if (currentItemIndex > -1) {
        const newPackages = [...selectedPackages];
        newPackages.splice(currentItemIndex, 1);

        setPackages(newPackages);
      } else {
        const newPackages = [...selectedPackages, packageItem];
        setPackages(newPackages);
      }
    },
    [selectedPackages]
  );

  const onPillClick = useCallback(
    (filter: Filters) => {
      const currentItemIndex = selectedFilters.findIndex(
        (item: any) => item.name === filter.name
      );

      if (currentItemIndex > -1) {
        const newPackages = [...selectedFilters];
        newPackages.splice(currentItemIndex, 1);

        setFilters(newPackages);
      } else {
        const newPackages = [...selectedFilters, filter];
        setFilters(newPackages);
      }
    },
    [selectedFilters]
  );

  return (
    //div containing the project box
    <div className="project-box">
      <div className="header">
        <img src={icon} alt={alt_icon_name} />
        <h3>
          <span className="title">{name}</span>
          <span className="subtitle">{catchphrase}</span>
        </h3>
      </div>

      <div className="project-content">
        <ul>

          {description.map((item, index) => {
            return (
              <li key={index}>
                {item}
              </li>
            );
          })}

        </ul>
      </div>

      <ul className="project-tags">
        {filters.map((filter) => (
          <li
            key={filter.color}
            className={`filter ${
              selectedFilters.some((item) => item.name === filter.name)
                ? "active-filter"
                : ""
            }`}
            style={{ background: filter.color }}
            onClick={() => onPillClick(filter)}
          >
            {filter.name}
          </li>
        ))}
      </ul>

      <div className="project-packages">
        <a href={github_link} className="github">
          <Github />
        </a>

        <ul>
          {packages.map((packageItem) => (
            <li
              key={packageItem.color}
              className={`filter filter-package ${
                selectedPackages.some((item) => item.name === packageItem.name)
                  ? "active-filter"
                  : ""
              }`}
              style={{ background: packageItem.color }}
              onClick={() => onOptionSelect(packageItem)}
            >
              {packageItem.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectBox;
