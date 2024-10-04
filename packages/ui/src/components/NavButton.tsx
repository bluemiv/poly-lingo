import { ReactNode } from 'react';
import { TPropsWithComponent } from '@repo/core/types';

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
      className={`flex items-center gap-2 bg-dark-900 px-3 py-2 rounded hover:shadow-xl active:shadow-none transition ease-in-out duration-150 ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}
