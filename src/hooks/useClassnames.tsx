export const useClassnames = (classnames: Record<string, boolean>): string => {
  return Object.entries(classnames)
    .filter(([, active]) => active)
    .map(([name]) => name)
    .join(' ');
};
