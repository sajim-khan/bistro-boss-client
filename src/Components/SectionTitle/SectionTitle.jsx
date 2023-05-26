const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto my-8">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <p className="text-4xl uppercase border-y-4 py-4">{heading}</p>
    </div>
  );
};

export default SectionTitle;
