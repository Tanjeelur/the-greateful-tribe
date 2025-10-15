interface DecorativeCircleProps {
  color: 'purple' | 'gold';
  size: 'small' | 'medium' | 'large';
  position: string;
}

export default function DecorativeCircle({ color, size, position }: DecorativeCircleProps) {
  const sizeClasses = {
    small: 'w-24 h-24',
    medium: 'w-40 h-40',
    large: 'w-64 h-64',
  };

  const colorClasses = {
    purple: 'bg-[#6B2C91]',
    gold: 'bg-[#E8C547]',
  };

  return (
    <div
      className={`absolute ${sizeClasses[size]} ${colorClasses[color]} rounded-full opacity-10 ${position}`}
      aria-hidden="true"
    />
  );
}
