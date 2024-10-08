import { ReactNode } from 'react';

export type TPropsWithClassName<T = unknown> = T & { className?: string };

export type TPropsWithChildren<T = unknown> = T & { children?: ReactNode };

export type TPropsWithComponent<T = unknown> = T & TPropsWithClassName & TPropsWithChildren;

export type TObj<T = unknown> = T & { [key: string]: any };

export type TApiQueryParams<T = unknown> = T & TObj;

export type TApiResponse<T = unknown> = { count: number; results: T[] };

export type TPropsWithModal = {
  open?: boolean;
  onClose?: () => void;
};
