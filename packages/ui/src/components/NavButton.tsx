import { ReactNode } from 'react';
import { TPropsWithComponent } from '@repo/core/types';

interface TProps {
  icon: ReactNode;
  onClick?: () => void;
  isActive?: boolean;
}

export default function NavButton({
  icon,
  children,
  className,
  onClick,
  isActive,
}: TPropsWithComponent<TProps>) {
  return (
    <button
      className={`flex items-center gap-2 px-3 py-2 rounded transition ease-in-out duration-150 ${isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-indigo-50 hover:text-indigo-600'} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
