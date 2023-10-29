import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

import Nav from "./components/Nav";

const App = () => {
  return (
    <main>
      <section className="sm:px-5 md:px-16 lg:px-28">
        <Nav />
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="popular-padding">
          <PopularProducts />
        </section>
        <section className="pl-10">
          <SuperQuality />
        </section>
        <section className="px-5">
          <Services />
        </section>
        <section className="padding">
          <SpecialOffer />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
      </section>
      <section className="bg-black sm:px-5 md:px-16 lg:px-28 md:py-16 py-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
