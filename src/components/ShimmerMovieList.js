import ShimmerCard from "./ShimmerCard";
const ShimmerMovieList = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <ShimmerCard key={index} />
        ))}
    </div>
  );
};
export default ShimmerMovieList;
