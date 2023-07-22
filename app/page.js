import Head from 'next/head';

const Home = () => {
  return (
    <div className="relative h-screen">
      <Head>
        <title>Tailwind Page</title>
      </Head>
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src="bg-coconutv2.mp4" type="video/mp4" />
      </video>

      {/* Blurred Right Side */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-blur z-10"></div>

      {/* Text on Blurred Part */}
      <div className="absolute top-0 right-3 sm:right-10 h-5/6 sm:h-full w-1/2 sm:w-1/3 z-20 flex items-center justify-center">
        <p className="backdrop-blur-xl bg-white  bg-opacity-50 rounded-xl sm:rounded-2xl z-10 text-black text-center sm:text-base text-xs p-8">
          The age-old Ayurvedic proverb holds timeless wisdom: "When Diet Is Wrong, Medicine Is Of No Use. When Diet Is Correct, Medicine Is Of No Need." <br></br> <br></br> 
          <p className="hidden sm:block">To unlock our true potential and be our best selves, adopting a healthy diet is essential. Rich in electrolytes, vitamins, and minerals, coconut water replenishes hydration levels, it is quite literally the balanced solution most of us need on a daily basis.<br></br><br></br></p>
          Our mission is to make the benefits of coconuts accessible to households across Delhi. Sourced from the Chitradurga and Davangere districts of Karnataka, this is as good as it gets!</p>
      </div>

      {/* Floating Logo */}
      <div className="absolute top-4 left-4 z-30">
        <img src="logo.png" alt="Logo" className="w-12 h-12" />
      </div>

      {/* Order Now Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg py-4 px-8 rounded">
          Subscibe Now
        </button>
      </div>
    </div>
  );
};

export default Home;
