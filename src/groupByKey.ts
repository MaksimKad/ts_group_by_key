type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupMap = {} as GroupsMap<T>;

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!groupMap[keyValue]) {
      groupMap[keyValue] = [];
    }

    groupMap[keyValue].push(item);
  });

  return groupMap;
}
