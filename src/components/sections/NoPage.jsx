import error from "/images/404.webp";
export const NoPage = () => {
  return (
    <>
      <img
        className="w-full h-full object-cover lg:hidden rounded-2xl"
        src={error}
        alt="404 Error"
      />
      <div className="hidden lg:flex bg-primary w-full h-full rounded-2xl">
        <img
          className="w-full h-full object-contain"
          src={error}
          alt="404 Error"
        />
      </div>
    </>
  );
};
