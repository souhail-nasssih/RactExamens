const CenteredLayout = ({ title, children }) => {
  return (
    <div className="container mt-5 d-flex justify-content-center w-100">
      <div>
        {title && <h2 className="mb-4 text-center">{title}</h2>}
        {children}
      </div>
    </div>
  );
};

export default CenteredLayout;
