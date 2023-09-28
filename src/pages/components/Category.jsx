const Category = ( data ) => {
  return (
    <button
      className={`px-4 py-1 rounded-full font-semibold hover:bg-secondry/50 text-white transition-all duration-200 ${data.activeCategory === data.name ? "bg-secondry" : "bg-secondry/20"}`}
      onClick={data.handler}
    >
      {data.name}
    </button>
  );
}

export default Category;
