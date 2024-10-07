import { TPropsWithComponent } from '@repo/core/types';

export default function LinkButton({
  children,
  className,
  onClick,
}: TPropsWithComponent<{ onClick?: () => void }>) {
  return (
    <button
      className={`text-indigo-600 hover:text-indigo-500 active:text-indigo-700 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
