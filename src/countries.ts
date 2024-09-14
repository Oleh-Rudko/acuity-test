export type Country = {
  value: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  label:
    | "Ukraine"
    | "USA"
    | "Germany"
    | "France"
    | "Italy"
    | "Spain"
    | "UK"
    | "Canada"
    | "Australia"
    | "Japan"
    | "China";
  icon:
    | "🇺🇦"
    | "🇺🇸"
    | "🇩🇪"
    | "🇫🇷"
    | "🇮🇹"
    | "🇪🇸"
    | "🇬🇧"
    | "🇨🇦"
    | "🇦🇺"
    | "🇯🇵"
    | "🇨🇳";
};

export const countries: Country[] = [
  {
    value: 0,
    label: "Ukraine",
    icon: "🇺🇦",
  },
  {
    value: 1,
    label: "USA",
    icon: "🇺🇸",
  },
  {
    value: 2,
    label: "Germany",
    icon: "🇩🇪",
  },
  {
    value: 3,
    label: "France",
    icon: "🇫🇷",
  },
  {
    value: 4,
    label: "Italy",
    icon: "🇮🇹",
  },
  {
    value: 5,
    label: "Spain",
    icon: "🇪🇸",
  },
  {
    value: 6,
    label: "UK",
    icon: "🇬🇧",
  },
  {
    value: 7,
    label: "Canada",
    icon: "🇨🇦",
  },
  {
    value: 8,
    label: "Australia",
    icon: "🇦🇺",
  },
  {
    value: 9,
    label: "Japan",
    icon: "🇯🇵",
  },
  {
    value: 10,
    label: "China",
    icon: "🇨🇳",
  },
];
