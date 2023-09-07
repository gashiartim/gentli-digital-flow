import React from "react";
import { navigationItems } from "./navigation-items";
import Link from "next/link";
import classNames from "classnames";
import Icon from "../shared/Icon/Icon";
import { IconType } from "../shared/Icon/IconTypes";

type NavigationProps = {};

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="text-sm">
      <ul className="flex space-x-6">
        {navigationItems.map((item, index) => {
          if (item.children?.length) {
            return (
              <li
                key={`nav-item-${index}`}
                className={classNames("flex items-center", item.className)}
              >
                {item.label}{" "}
                <Icon type={IconType.CHEVRON} className="h-4 w-4 ml-1" />
              </li>
            );
          }

          return (
            <li
              key={`nav-item-${index}`}
              className={classNames(item.className)}
            >
              <Link href={item.url}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navigation;
