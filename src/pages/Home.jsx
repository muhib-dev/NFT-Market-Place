import { EthereumIcon } from "../assets/icons";
import FeatureNftItem from "../components/home/FeatureNftItem";
import { topColletions } from "../constants";

const Home = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* hero section */}
        <div className="lg:mt-12 pt-6">
          <div className="md:grid gap-12 grid-cols-12">
            <div className="col-span-12 md:col-span-7 lg:col-span-8 text-center md:text-left">
              <h1 className="font-IntegralCF font-bold leading-relaxed lg:leading-snug text-2xl lg:text-[2.5rem]">
                DISCOVER, AND COLLECT
                <br /> DIGITAL ART NFTS
              </h1>

              <p className="text-xl mt-4 leading-9 md:max-w-lg text-[#565656]">
                Digital marketplace for crypto collectibles and non-fungible
                tokens (NFTs). Buy, Sell, and discover exclusive digital assets.
              </p>

              <div className="relative mt-8">
                <div className="hidden md:block absolute -left-14 bg-[url('/images/dotdots.png')] bg-no-repeat h-36 w-44 -z-10" />
                <button className="btn-contained text-xl">Explore Now</button>

                <div className="flex justify-center md:justify-start gap-2 md:gap-5 items-center mt-6 leading-9 mb-5 md:mb-0">
                  <div>
                    <h3 className="font-IntegralCF font-bold text-[2.5rem]">
                      98k<span className="font-DMSans">+</span>
                    </h3>
                    <p className="text-xl text-[#565656]">Artwork</p>
                  </div>
                  <div>
                    <h3 className="font-IntegralCF font-bold text-[2.5rem]">
                      12k<span className="font-DMSans">+</span>
                    </h3>
                    <p className="text-xl text-[#565656]">Auction</p>
                  </div>
                  <div>
                    <h3 className="font-IntegralCF font-bold text-[2.5rem]">
                      15k<span className="font-DMSans">+</span>
                    </h3>
                    <p className="text-xl text-[#565656]">Artist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 lg:col-span-4">
              <img
                src="./images/hero-image.svg"
                className="w-full h-full"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>

      {/* amaze NFT section*/}
      <div className="mt-28 bg-brand-gray">
        <div className="container mx-auto">
          <div className="py-5 lg:py-32">
            <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-24">
              <h3 className="uppercase font-IntegralCF font-bold text-3xl md:max-w-md leading-10">
                The amazing NFT art of the world here
              </h3>

              <div className="flex items-start gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-xl">Fast Transaction</h3>
                  <p className="text-[14px] text-[#696969] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-9 h-9"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="font-bold text-xl">Growth Transaction</h3>
                  <p className="text-[14px] text-[#696969] mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam etiam viverra tellus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Over */}
      <div className="my-28">
        <div className="container mx-auto">
          <div className="grid gap-y-8 md:gap-12 grid-cols-12">
            {/* col one */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-5">
              <div>
                <img
                  src="./images/collection-image4.jpg"
                  className="rounded-lg w-full max-h-[420px] object-cover"
                  alt="collection"
                />
              </div>

              <div className="flex justify-between mt-8">
                <div className="flex gap-3">
                  <img
                    src="./images/user.jpg"
                    className="w-12 h-12 rounded-full object-cover"
                    alt="user"
                  />

                  <div>
                    <h4 className="text-xl font-bold">The Futr Abstr</h4>
                    <p className="text-[14px] text-[#696969]">
                      10 in the stock
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[12px] font-medium">Highest Bid</p>
                  <div className="font-bold text-base">
                    <img
                      src="./images/ethereum.svg"
                      className="h-4 inline-block mr-1"
                      alt="ethereum"
                    />
                    <span>0.25 ETH</span>
                  </div>
                </div>
              </div>
            </div>

            {/* col two */}
            <div className="col-span-12 lg:col-span-6 xl:col-span-4 2xl:col-span-3">
              <div className="flex gap-4">
                <div className="max-w-[150px]">
                  <img
                    src="./images/collection-image2.jpg"
                    className="w-full h-full rounded-lg"
                    alt="collection"
                  />
                </div>

                <div>
                  <h5 className="font-bold text-xl">The Futr Abstr</h5>

                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <img
                      src="./images/user.jpg"
                      className="w-[34px] h-[34px] rounded-full object-cover"
                      alt="user"
                    />

                    <button className="flex items-center gap-1 border border-[#00AC4F] rounded-md px-2 py-1 text-[#00AC4F] text-[12px] font-bold">
                      <EthereumIcon className="h-[14px]" />
                      <span>0.2 ETH</span>
                    </button>
                    <span className="text-[#757575] text-[14px]">1 of 8</span>
                  </div>

                  <button className="btn-outlined">Place a bid</button>
                </div>
              </div>

              <div className="my-10 flex gap-4">
                <div className="max-w-[150px]">
                  <img
                    src="./images/collection-image3.jpg"
                    className="w-full h-full rounded-lg"
                    alt="collection"
                  />
                </div>

                <div>
                  <h5 className="font-bold text-xl">Lorem ipsum dolor</h5>

                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <img
                      src="./images/user.jpg"
                      className="w-[34px] h-[34px] rounded-full object-cover"
                      alt="user"
                    />

                    <button className="flex items-center gap-1 border border-[#00AC4F] rounded-md px-2 py-1 text-[#00AC4F] text-[12px] font-bold">
                      <EthereumIcon className="h-[14px]" />
                      <span>0.2 ETH</span>
                    </button>
                    <span className="text-[#757575] text-[14px]">1 of 8</span>
                  </div>

                  <button className="btn-outlined">Place a bid</button>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="max-w-[150px]">
                  <img
                    src="./images/collection-image1.jpg"
                    className="w-full h-full rounded-lg"
                    alt="collection"
                  />
                </div>

                <div>
                  <h5 className="font-bold text-xl">Consectetur adipis</h5>

                  <div className="flex items-center gap-2 mt-2 mb-4">
                    <img
                      src="./images/user.jpg"
                      className="w-[34px] h-[34px] rounded-full object-cover"
                      alt="user"
                    />

                    <button className="flex items-center gap-1 border border-[#00AC4F] rounded-md px-2 py-1 text-[#00AC4F] text-[12px] font-bold">
                      <EthereumIcon className="h-[14px]" />
                      <span>0.2 ETH</span>
                    </button>
                    <span className="text-[#757575] text-[14px]">1 of 8</span>
                  </div>

                  <button className="btn-outlined">Place a bid</button>
                </div>
              </div>
            </div>

            {/* col three */}
            <div className="col-span-12 lg:col-span-12 xl:col-span-4 2xl:col-span-4 2xl:border-l 2xl:pl-8">
              <h4 className="text-xl font-bold font-IntegralCF">
                Top Collections over
              </h4>
              <p className="text-lg font-bold text-[#3D00B7] mb-8 mt-1">
                Last 7 days
              </p>

              <div className="divide-y">
                {topColletions.map((item, index) => (
                  <div
                    className="flex gap-8 items-center py-3"
                    key={item.title}
                  >
                    <div className="w-5 font-bold text-2xl">{index + 1}</div>

                    <div className="relative">
                      <img
                        className="h-[60px] w-[60px] rounded-full"
                        src={item.image}
                        alt={item.title}
                      />
                      {item.isSlected ? (
                        <img
                          className="w-8 h-8 absolute -top-2 -right-3"
                          src="./images/check-fill.png"
                        />
                      ) : null}
                    </div>

                    <div className="flex-1">
                      <p className="text-base font-medium">{item.title}</p>
                      <p className="flex items-center gap-1 text-[14px] font-semibold text-[#636363]">
                        <EthereumIcon className="h-4 text-[#000]" />
                        {item.price}
                      </p>
                    </div>

                    <div
                      className={`flex-1 text-right text-xl font-semibold ${
                        item.isSlected ? "text-[#14C8B0]" : "text-[#FF002E]"
                      }`}
                    >
                      {item.percentage}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection NFT */}
      <div className="mt-28 bg-brand-gray">
        <div className="container mx-auto">
          <div className="py-5 lg:py-32">
            <h3 className="uppercase font-IntegralCF font-bold text-[28px] mb-12">
              Collection Featured NFTs
            </h3>

            <div className="grid gap-y-8 md:gap-12 grid-cols-12">
              {/* col one */}
              <div className="col-span-12 lg:col-span-4">
                <FeatureNftItem />
              </div>

              {/* col two */}
              <div className="col-span-12 lg:col-span-4">
                <FeatureNftItem />
              </div>

              {/* col three */}
              <div className="col-span-12 lg:col-span-4">
                <FeatureNftItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
