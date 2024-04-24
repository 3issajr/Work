import Dish from "../public/images/dish.png";
import Drinks from "../public/images/drinks.png";
import Dessert from "../public/images/dessert.png";
import Tea from "../public/images/tea 1.png"

export default function Browse() {
  return (
    <div id="browse" className="flex justify-center flex-col">

      <div>
        <h1 id="browse-header" className="text-4xl md:text-7xl text-center">
          Browse Our Menu
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xxs:grid-cols-1 gap-6">

        <div id="box1" className="py-1 flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-5 border border-gray-400">
            <img src={Tea} width={35} height={50} alt="tea" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold">Breakfast</h1>
            <p className="mt-2 text-center lg:text-center">
              In the new era of technology<br/> we look in the future with certainty and pride for our life.
            </p>
            <button className="mt-2 px-4 py-2">Explore Menu</button>
          </div>
        </div>

        <div id="box2" className="flex flex-col items-center">
          <div className="bg-gray-300 rounded-full p-5 border border-gray-400">
            <img src={Dish} width={40} height={50} alt="dish" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold">Main Dishes</h1>
            <p className="mt-2 text-center lg:text-center">
              In the new era of technology<br/> we look in the future with certainty and pride for our life.
            </p>
            <button className="mt-2 px-4 py-2">Explore Menu</button>
          </div>
        </div>

        <div id="box3" className="flex flex-col items-center mt-6 lg:mt-0">
          <div className="bg-gray-300 rounded-full p-5 border border-gray-400">
            <img src={Drinks} width={30} height={40} alt="drinks" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold">Drinks</h1>
            <p className="mt-2 text-center lg:text-center">
              In the new era of technology<br/> we look in the future with certainty and pride for our life.
            </p>
            <button className="mt-2 px-4 py-2">Explore Menu</button>
          </div>
        </div>

        <div id="box4" className="flex flex-col items-center mt-6 lg:mt-0">
          <div className="bg-gray-300 rounded-full p-5 border border-gray-400">
            <img src={Dessert} width={38} height={50} alt="dessert" />
          </div>
          <div className="text-center mt-4">
            <h1 className="font-bold">Dessert</h1>
            <p className="mt-2 text-center lg:text-center">
              In the new era of technology<br/> we look in the future with certainty and pride for our life.
            </p>
            <button className="mt-2 px-4 py-2">Explore Menu</button>
          </div>
        </div>

      </div>
      
    </div>
  );
}
