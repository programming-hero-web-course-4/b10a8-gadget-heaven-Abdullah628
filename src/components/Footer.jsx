const Footer = () => {
  return (
    <div className="mt-10">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Gadget Heaven</h1>
        <p>Loading the way in cutting-edge technology and innovation.</p>
      </div>
      <hr className="my-6 w-10/12 mx-auto text-[#09080F1A]" />
      <div className="flex justify-between w-5/12 mx-auto text-center m-6 p-6">
        <ul className="flex flex-col gap-2">
          <li className="font-bold">Services</li>
          <li>Product Support</li>
          <li>Order Tracking</li>
          <li>Shipping & Delivery</li>
          <li>Returns</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-bold">Services</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-bold">Legal</li>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>Cookie Policy</li>
        </ul>
        
      </div>
    </div>
  );
};

export default Footer;
