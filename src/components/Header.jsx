export default function Header() {
  return (
    <header className="bg-blue-600 px-4 py-8 text-white shadow-md sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
          MyApp
        </h1>

        <p className="mt-2 text-sm text-blue-100 sm:text-base">
          Welcome to our application
        </p>
      </div>
    </header>
  );
}