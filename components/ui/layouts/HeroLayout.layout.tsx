const HeroLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100dvh-60px)] p-4">
      {children}
    </div>
  );
};

export default HeroLayout;
