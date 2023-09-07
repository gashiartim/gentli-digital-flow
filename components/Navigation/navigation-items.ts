import { NavigationItem } from "@/typings";

export const navigationItems: NavigationItem[] = [
  {
    label: "Ballina",
    url: "/",
  },
  {
    label: "Koleksioni i Ri",
    url: "/",
    children: [
      {
        label: "Femra",
        url: "/",
      },
      {
        label: "Meshkuj",
        url: "/",
      },
      {
        label: "Femije",
        url: "/",
      },
    ],
  },
  {
    label: "Femra",
    url: "/",
    children: [
      {
        label: "Patika",
        url: "/",
      },
      {
        label: "Kepuce",
        url: "/",
      },
      {
        label: "Çanta",
        url: "/",
      },
    ],
  },
  {
    label: "Meshkuj",
    url: "/",
  },
  {
    label: "Femije",
    url: "/",
  },
  {
    label: "Aksesore",
    url: "/",
  },
  {
    label: "Brendet",
    url: "/",
  },
  {
    label: "ZBRITJE",
    url: "/",
    className: "text-red-400",
  },
  {
    label: "Numrat e fundit",
    url: "/",
  },
];
