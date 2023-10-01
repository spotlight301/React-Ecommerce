const HeaderCard = (props) => {
  const product = props.product;
  return (
    <div className={`group hover:-skew-x-1 hover:-skew-y-3 transition-all cursor-pointer rounded-xl text-white relative overflow-hidden w-[calc(50%-10rem)] mt-[4rem] aspect-square ${props.className} border-4 border-white`}>
      <img src={product.image_URL} className="min-h-full min-w-full" />
      <div className="bg-secondry/20 backdrop-blur z-10 w-full h-full justify-center items-center flex absolute text-center top-0 left-0 opacity-0 duration-1000  hover:opacity-100 p-5" onClick={() => props.detailsHandel(product)}>
        <h3 className="text-center text-4xl font-semibold mb-12 text-text">{product.name}</h3>
        {/* Light Effect */}
      </div>
      <div className="absolute w-[400%] h-[150px] blur-xl bg-white/40 -left-[140%] top-[140%] group-hover:left-[0%] group-hover:top-[0%] rotate-45 z-[0] transition-all"></div>
    </div>
  );
}

export default HeaderCard;
