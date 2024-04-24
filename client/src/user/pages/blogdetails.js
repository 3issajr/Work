import { useParams } from "react-router-dom";

import Img from '../public/images/blogpage3.png'
import Data from './data/blogsdata'


export default function BlogDetails() {
    const { id } = useParams();
    const blog = Data.find(blogs => blogs.id == id);
    
return (
    <>
        <div id='blogdetails-page' className='flex flex-col justify-center'>

            <div id='blogdetails-header' className='flex justify-center items-center flex-col pt-5'>

                <div className='w-full  text-center py-10'>
                    <h1 className='text-7xl xxs:text-4xl xs:text-4xl sm:text-5xl'>{blog.info}</h1>
                </div>

                <div className="flex justify-center items-center flex-col  lg:flex-col px-5">

                    <img src={blog.src} className='img rounded-lg w-full md:w-2/5' alt={blog.name} />

                    <div id='firstquestion' className='w-full  md:w-2/5 flex flex-col justify-center items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold py-5'>What do you need to prepare a home-made burger?</h2>
                            <p className='py-5'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the <br /> palate. Today,
                                we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
                            </p>
                            <ol>
                                <li><b>1. Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                                <li><b>2. Seasoning</b>: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                                <li><b>3. Don’t Overwork the Meat:</b>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                                <li><b>4. Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                                <li><b>5. Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                            </ol>
                        </div>
                    </div>

                    <div id='secondquestion' className='w-full  md:w-2/5 flex flex-col justify-center items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold py-5'>What are the right ingredients to make it delicious?</h2>
                            <p className='py-5'>Creating the perfect burger and pizza is an art, combining ingredients, techniques, and passion to craft dishes that truly delight the <br /> palate. Today,
                                we'll unveil some closely guarded secrets and insider tips for mastering these beloved staples of the culinary world.
                            </p>
                            <ol>
                                <li><b>1. Quality Beef:</b> The heart of a perfect burger is top-notch beef. Opt for fresh, high-quality ground beef with a fat content of about 20% for the juiciest, most flavorful results.</li>
                                <li><b>2. Seasoning</b>: Simplicity is key here. A generous pinch of salt and black pepper just before cooking will enhance the beef's natural flavors without overshadowing them.</li>
                                <li><b>3. Don’t Overwork the Meat:</b>When forming your patties, be gentle. Overworking the meat can lead to dense, tough burgers. You want a patty that's firm enough to hold together, but not compressed.</li>
                                <li><b>4. Cooking:</b> High heat is crucial. Whether you're grilling or pan-searing, make sure your cooking surface is hot enough to form a nice crust on the patty, sealing in those delicious juices.</li>
                                <li><b>5. Resting:</b> Allow your cooked burgers to rest for a few minutes before serving. This lets the juices redistribute throughout the patty, ensuring a moist and flavorful bite.</li>
                            </ol>
                        </div>
                    </div>

                    <img src={Img} className='img rounded-lg w-full md:w-2/5 py-5' alt={blog.name} />

                    <div id='thirdquestion' className='w-full md:w-2/5 flex flex-col justify-center items-center'>
                        <div>
                            <h2 className='text-2xl font-semibold py-5'>What are the right ingredients to make it delicious?</h2>
                            <p className='text-justify py-5'>Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed eget viverra egestas nisi in consequat.
                                Fusce sodales augue a accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae, eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus ve of all hendrerit elementum morbi curabitur etiam nibh justo,
                                lorem aliquet donec sed sit mi dignissim at ante massa mattis magna sit amet purus gravida quis blandit turpis..
                            </p>
                        </div>
                    </div>

                </div>

                <div id='readmore' className='w-full p-10 bg-white'>
                    <div id='readmore-header' className='flex flex-col items-center text-center py-10'>
                        <h1 className='text-5xl'>Read More Articles</h1>
                        <p className='w-5/6 py-3'>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                    </div>

                    <div id='readmore-articles' className='flex flex-wrap justify-center'>
                        {Data.slice(0, 4).map((article) => {
                            return (
                                <div key={article.id} className='shadow-md rounded-md mr-5 mb-5 w-full md:w-48'>
                                    <div style={{ height: '200px' }}>
                                        <img src={article.src} className='w-full h-full object-cover' alt={`Article ${article.id}`} />
                                    </div>
                                    <div id='articles-info' className='p-5'>
                                        <small className='block'>{article.date}</small>
                                        <p>{article.info}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>

            </div>

        </div>


    </>
)
}
