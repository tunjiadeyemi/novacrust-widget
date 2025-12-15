const PrimaryButton = ({
  disabled,
  label,
  className
}: {
  className?: string;
  disabled?: boolean;
  label: string;
}) => {
  return (
    <button
      type="button"
      className={`${className} bg-primary text-sm lg:text-base h-12 lg:h-15 w-full text-center text-white font-bold rounded-[30px] ${
        disabled
          ? 'opacity-50 cursor-not-allowed'
          : 'cursor-pointer hover:scale-95 duration-500 transition-all mt-0 md:mt-5'
      }`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
