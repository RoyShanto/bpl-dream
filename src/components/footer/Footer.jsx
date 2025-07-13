

const Footer = () => {
    return (
        <div className="bg-slate-950 relative mt-72">
            <div className="bg-transparent p-6 rounded-xl w-9/11 mx-auto text-center border-2 border-gray-400 absolute -top-50 right-1/11">
                <div className="bg-white rounded-xl">
                    <div className="bg-[url(/public/assets/bg-shadow.png)] bg-cover py-24 rounded-xl">
                        <h2 className="font-bold text-3xl">Subscribe to our Newsletter</h2>
                        <p className="text-xl text-gray-500 mt-4">Get the latest updates and news right in your inbox!</p>
                        <div class=" mt-6">
                            <input class="input rounded-lg mr-4" placeholder="Enter your email" />
                            <button class="btn font-bold rounded-lg bg-gradient-to-r from-red-300 to-amber-300">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-32 pt-60">
                <img className="mx-auto" src="/public/assets/logo-footer.png" alt="" />
                <div className="flex justify-between mt-16">
                    <div className="w-2/10">
                        <h3 className="font-semibold text-lg text-white">About Us</h3>
                        <p className="text-base text-gray-500 mt-4">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>
                    <div className="w-2/10">
                        <h3 className="font-semibold text-lg text-white">Quick Links</h3>
                        <ul className="text-gray-500 text-base mt-4 space-y-2 list-inside list-disc">
                            <li>Home</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="w-2/10">
                        <h3 className="font-semibold text-lg text-white">Subscribe</h3>
                        <p className="mt-4 text-gray-500">Subscribe to our newsletter for the latest updates.</p>
                        <div class="join mt-5">
                            <input class="input join-item rounded-l-lg" placeholder="Enter your email" />
                            <button class="btn join-item font-bold rounded-r-lg bg-gradient-to-r from-red-300 to-amber-300">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="mt-16" />
            <p className="text-base text-gray-500 text-center py-8">@2024 Your Company All Rights Reserved.</p>
        </div>
    );
};

export default Footer;