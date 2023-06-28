import nftShop from "../images/nftShop.png";

const NftMarket = () => {
  return (
    <div
      className="relative nftMarket-style  w-[340px] h-[160px] flex justify-start items-start p-[10px] font-bold  mt-4 rounded-lg border-[2px] border-[#2D2D32]"
      style={{ fontSize: "20px" }}
    >
      NFT 마켓
      <img
        className="w-[160px] absolute right-0"
        src={nftShop}
        alt="nftMarket"
      />
    </div>
  );
};

export default NftMarket;
