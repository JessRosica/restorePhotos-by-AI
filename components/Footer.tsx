export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6">
      <span className="text-sm text-gray-500 sm:text-center pr-5">
        {" "}
        Join communities to get update my next project -
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 ">
            Facebook
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6">
            Telegram
          </a>
        </li>
      </ul>
    </footer>
  );
}
