type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: (active: boolean) => void;
};

export const Hamburger: React.FC<HamburgerProps> = ({ isOpen, setIsOpen }) => (
  <>
    <div className="w-2/5 inline-flex justify-end ml-0 ">
      <button
        type="button"
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </>
);
