import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="bg-[#FFF9F1] min-h-screen text-gray-800">
      {/* SEO Tags */}
      <Helmet>
        <title>Daivatam Dairy | Fresh & Pure Dairy Products</title>
        <meta name="description" content="Farm fresh milk, curd, paneer, ghee & more. Delivered directly from Daivatam Dairy to your home." />
        <meta property="og:title" content="Daivatam Dairy" />
        <meta property="og:description" content="Pure, fresh and ethical dairy products delivered to your home." />
        <meta property="og:type" content="website" />
      </Helmet>

    </div>
  )
}

export default App
