// import React from 'react';

const Testimonial = () => {
    return (
        <div className="py-8">
            <p className="text-center text-black font-semibold mt-4">Reviews</p>
            <h2 className="text-4xl text-center font-bold">Client&apos;s Testimonial</h2>
            <p className="text-gray-400 max-w-2xl text-center mx-auto">Your satisfaction is our priority. We are committed to providing exceptional dishes as before, during, and after your purchase.</p>
            <div className="md:flex justify-center gap-8 mt-4">
                <div className="max-w-sm mx-auto md:mx-0 shadow-xl rounded p-4 mb-4">
                    <p className="text-justify text-gray-400 mb-6 font-semibold">
                        &quot;My dining experience at was simply outstanding! The menu offered a delightful variety of dishes, each bursting with flavor and freshness &quot;
                    </p>
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://i.ibb.co/MZPb3Tt/photo-1500648767791-00dcc994a43e-auto-format-fit-crop-q-80-w-1887-ixlib-rb-4-0.jpg"
                            alt=""
                        />
                        <div className="ml-4">
                            <p className="font-bold">Sakib Hasan</p>
                            <p className="text-gray-400">Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm mx-auto md:mx-0 shadow-xl p-4 mb-4">
                    <p className="text-justify text-gray-400 mb-6 font-semibold">
                        &quot;I recently celebrated my special occasion at, and it was an unforgettable experience. The menu was a culinary masterpiece, offering a delightful fusion of flavors and textures.&quot;
                    </p>
                    <div className="flex items-center">
                        <img
                            className="w-10 h-10 rounded-full"
                            src="https://i.ibb.co/cwXPCZV/photo-1494790108377-be9c29b29330-auto-format-fit-crop-q-80-w-1887-ixlib-rb-4-0.jpg"
                            alt=""
                        />
                        <div className="ml-4">
                            <p className="font-bold">Dristi</p>
                            <p className="text-gray-400">Bangladesh</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonial;