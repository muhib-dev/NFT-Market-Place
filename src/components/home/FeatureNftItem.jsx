const FeatureNftItem = () => {
  return (
    <>
      <div className="xl:flex gap-4">
        <div className="mb-3 xl:mb-0">
          <img
            src="./images/collection-image1.jpg"
            className="rounded-lg w-full h-full"
            alt="collection"
          />
        </div>

        <div className="flex xl:flex-col gap-3">
          <img
            src="./images/collection-image2.jpg"
            className="rounded-lg w-full xl:w-auto xl:max-w-[150px]"
            alt="collection"
          />
          <img
            src="./images/collection-image3.jpg"
            className="rounded-lg w-full xl:w-auto xl:max-w-[150px]"
            alt="collection"
          />
          <img
            src="./images/collection-image2.jpg"
            className="rounded-lg w-full xl:w-auto xl:max-w-[150px]"
            alt="collection"
          />
        </div>
      </div>

      <div className="flex justify-between items-start mt-8">
        <div>
          <h4 className="xl:text-xl font-bold mb-2">Amazing Collection</h4>
          <div className="flex gap-3">
            <img
              src="./images/user.jpg"
              className="w-5 h-5 xl:w-7 xl:h-7 rounded-full object-cover"
              alt="user"
            />

            <p className="text-[14px]">by Muhibullah</p>
          </div>
        </div>

        <button className="btn-outlined py-1 px-2 xl:py-2">
          Total 54 Items
        </button>
      </div>
    </>
  );
};

export default FeatureNftItem;
