import Img1 from '../public/images/testimonals1.png'
import Img2 from '../public/images/testimonals2.png'
import Img3 from '../public/images/testimonals3.png'

export default function Testimonals() {
  return (
    <div id='testimonals' className=" py-8">
      <div className="container">

        <h1 id='testimonals-header' className="text-4xl md:text-7xl text-center mb-8">
          What Our Customers Say
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="testimonials-box">

            <div className="testimonials-box-title">
              <h1 className="font-extrabold">"The Best Restaurant"</h1>
              <p className="mt-2">Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
             
              <hr className="my-4" />

              <div className="flex items-center">
                <img src={Img1} width={60} height={50} alt="avatar1" />
                <div className="ml-4">
                  <p>Sophire Robson</p>
                  <p>Los Angeles, CA</p>
                </div>
              </div>

            </div>

          </div>

          <div className="testimonials-box">

            <div className="testimonials-box-title">
              <h1 className="font-extrabold">“Simply delicious”</h1>
              <p className="mt-2">Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
              
              <hr className="my-4" />

              <div className="flex items-center">
                <img src={Img2} width={60} height={50} alt="avatar2" />
                <div className="ml-4">
                  <p>Matt Cannon</p>
                  <p>San Diego, CA</p>
                </div>
              </div>

            </div>

          </div>

          <div className="testimonials-box">

            <div className="testimonials-box-title">
              <h1 className="font-extrabold">“One of a kind restaurant”</h1>
              <p className="mt-2">The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
             
              <hr className="my-4" />

              <div className="flex items-center">
                <img src={Img3} width={60} height={50} alt="avatar3" />
                <div className="ml-4">
                  <p>Andy Smith</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
              
            </div>

          </div>
          
        </div>

      </div>
    </div>
  )
}
