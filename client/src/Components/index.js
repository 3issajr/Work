import React from 'react'
import Image1 from '../assets/image1.jpg'
import Image2 from '../assets/image2.jpg'
import Image4 from '../assets/image4.jpg'

const index = () => {
  return (
    <>


    <section class="index py-4 py-xl-5">
        <div class="container">
            <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="text-white p-4 p-md-5">
                            <h2 class="fw-bold text-center text-white mb-5">Love is in the Air: A Wedding Festival</h2>
                            <h2 class="mb-5 text-center">Outdoor Wedding</h2>
                            <div class="my-3 text-center"><a class="btn btn-primary btn-lg me-2" role="button" href="#">See More</a></div>
                        </div>
                    </div>
                    <div class="col-md-6 order-first order-md-last" style={{minHeight: "250px"}}><img class="w-100 h-96 fit-cover" src={Image1}/></div>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                <div class="row g-0">
                    <div class="col-md-6 " style={{minHeight: "250px"}}><img class="w-100 h-96 fit-cover" src={Image2}/></div>
                    <div class="col-md-6">
                        <div class="text-white p-4 p-md-5">
                            <h2 class="fw-bold text-center text-white mb-5">Celebrating the Love: A Wedding to Remember</h2>
                            <h2 class="mb-5 text-center">Indoor Wedding</h2>
                            <div class="my-3 text-center"><a class="btn btn-primary btn-lg me-2" role="button" href="#">See More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5">
            <div class="bg-dark border rounded border-0 border-dark overflow-hidden">
                <div class="row g-0">
                    <div class="col-md-6">
                        <div class="text-white p-4 p-md-5">
                            <h2 class="fw-bold text-center text-white mb-5">With Love, Joy, and Happiness: The Wedding of Bride and Groom</h2>
                            <h2 class="mb-5 text-center">Wedding Tables</h2>
                            <div class="my-3 text-center"><a class="btn btn-primary btn-lg me-2" role="button" href="#">See More</a></div>
                        </div>
                    </div>
                    <div class="col-md-6 order-first order-md-last" style={{minHeight: "250px"}}><img class="w-100 h-96 fit-cover" src={Image4}/></div>
                </div>
            </div>
        </div>
    </section>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>

      
    </>
  )
}

export default index
