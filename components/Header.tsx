export default function Header() {
  return (
    <header className="z-40 items-center w-full h-16 bg-white border-2 border-gray-100 rounded-lg">
      <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
        <div className="relative flex items-center w-full pl-1 lg:max-w-68 sm:pr-2 sm:ml-0">
          <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full"></div>
          <div className="relative flex items-center justify-end w-1/4 p-1 ml-5 mr-4 sm:mr-0 sm:right-auto">
            <a href="https://www.aliahad.com/" className="relative block">
              <img
                alt="profil"
                src="/ali.jpg"
                className="mx-auto object-cover rounded-full h-10 w-10 hover:ring ring-pink-500 ring-offset-2"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
