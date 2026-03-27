const GeneralLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen p-4">
      {children}
    </div>
  );
};

export default GeneralLayout;
