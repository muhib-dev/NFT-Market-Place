import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh_-_10rem)] px-5 md:px-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
