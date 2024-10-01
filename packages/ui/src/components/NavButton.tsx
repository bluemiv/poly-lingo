import { TPropsWithComponent } from '../types';
import { ReactNode } from 'react';

interface TProps {
  icon: ReactNode;
  onClick?: () => void;
}

export default function NavButton({
  icon,
  children,
  className,
  onClick,
}: TPropsWithComponent<TProps>) {
  return (
    <button
      className={`flex items-center gap-2 bg-slate-100 px-3 py-2 rounded hover:shadow active:bg-slate-200 active:shadow-none transition ease-in-out duration-150 ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
