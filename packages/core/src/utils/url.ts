import { TObj } from '../types';

export const replaceRoutePath = (url: string, query: TObj) =>
  Object.entries(query).reduce((acc, entry) => {
    const [key, value] = entry;
    return url.replace(`:${key}`, value);
  }, url);
