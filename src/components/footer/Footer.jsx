

const Footer = () => {
    return (
        <div className="bg-slate-950 relative md:mt-72 max-sm:mt-50">
            <div className="bg-transparent md:p-6 max-sm:p-2 rounded-xl md:w-9/11 text-center border-2 border-gray-400 absolute md:-top-50 max-sm:-top-35 md:right-1/11 max-sm:mx-2">
                <div className="bg-white rounded-xl">
                    <div className="bg-[url(/public/assets/bg-shadow.png)] bg-cover md:py-24 max-sm:py-7 rounded-xl">
                        <h2 className="font-bold md:text-3xl max-sm:text-2xl">Subscribe to our Newsletter</h2>
                        <p className="md:text-xl max-sm:text-base text-gray-500 mt-4">Get the latest updates and news right in your inbox!</p>
                        <div class=" mt-6 max-sm:space-y-1 max-sm:px-10">
                            <input class="input rounded-lg mr-4 max-sm:w-full" placeholder="Enter your email" />
                            <button class="btn font-bold rounded-lg max-sm:w-full bg-gradient-to-r from-red-300 to-amber-300">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:px-32 max-sm:px-5 md:pt-60 max-sm:pt-35">
                <img className="mx-auto" src="/public/assets/logo-footer.png" alt="" />
                <div className="md:flex justify-between mt-16 max-sm:text-center">
                    <div className="md:w-2/10">
                        <h3 className="font-semibold text-lg text-white">About Us</h3>
                        <p className="text-base text-gray-500 mt-4">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="md:w-2/10">
                        <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                        <ul className="text-gray-500 text-base mt-4 space-y-2 list-inside list-disc">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="md:w-2/10">
                        <h3 className="font-semibold text-lg text-white">Subscribe</h3>
                        <p className="mt-4 text-gray-500">Subscribe to our newsletter for the latest updates.</p>
                        <div class="join mt-5">
                            <input class="input join-item rounded-l-lg" placeholder="Enter your email" />
                            <button class="btn join-item font-bold rounded-r-lg bg-gradient-to-r from-red-300 to-amber-300">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="md:mt-16 max-sm:mt-5" />
            <p className="text-base text-gray-500 text-center py-8">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;