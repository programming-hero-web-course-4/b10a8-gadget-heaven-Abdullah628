
import Button from "./Button";
import bannerImg from "../assets/banner.jpg"
const Hero = () => {
    return (
        <div>
            <div className="text-center bg-[#9538E2] text-white py-20 pb-50">
                <h2 className="text-5xl font-bold mb-4 w-[80%] m-auto" >Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h2>
                <p className="text-lg mb-8 w-[60%] m-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

                <Button bgColor={"#fff"} text={"Shop Now"} textColor={"#9538E2"} />
            </div>
            <div className="w-[60%] m-auto mt-[-170px] rounded-lg border border-white">
                <img src={bannerImg} className="rounded-lg border-10 border-white/50" alt="bannerImg" />
            </div>
        </div>
    );
};

export default Hero;