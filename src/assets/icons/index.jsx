export const MenuIcon = ({ className }) => {
  return (
    <svg
      className={className || "w-7 h-7"}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const SearchIcon = ({ className }) => {
  return (
    <svg
      className={className || "w-5 h-5 text-[#757575]"}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export const EthereumIcon = ({ className }) => {
  return (
    <div className="inline-block">
      <svg
        className={className || "w-5 h-5 text-[#757575]"}
        fill="currentColor"
        viewBox="0 0 256 417"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <polygon points="127.9611 0 125.1661 9.5 125.1661 285.168 127.9611 287.958 255.9231 212.32" />
          <polygon points="127.962 0 0 212.32 127.962 287.959 127.962 154.158" />
          <polygon points="127.9611 312.1866 126.3861 314.1066 126.3861 412.3056 127.9611 416.9066 255.9991 236.5866" />
          <polygon points="127.962 416.9052 127.962 312.1852 0 236.5852" />
          <polygon points="127.9611 287.9577 255.9211 212.3207 127.9611 154.1587" />
          <polygon points="0.0009 212.3208 127.9609 287.9578 127.9609 154.1588" />
        </g>
      </svg>
    </div>
  );
};
