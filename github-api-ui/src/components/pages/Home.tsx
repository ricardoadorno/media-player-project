import Footer from "../layout/Footer";
import UserResults from "../users/UserResults";
import Alert from "../layout/Alert";

function Home() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <main className="container mx-auto px-3 pb-12">
        <Alert />
        <UserResults />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
