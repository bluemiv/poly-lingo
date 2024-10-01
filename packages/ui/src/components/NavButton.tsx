import { TPropsWithComponent } from '../types';

interface TProps {
  onClick?: () => void;
}

export default function NavButton({ children, className, onClick }: TPropsWithComponent<TProps>) {
  return (
    <button className={`flex items-center gap-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
