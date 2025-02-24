import { useState } from 'react'
const updatedGadgets = {
    "gadgets": [
      {
        "name": "iPhone 15 Pro",
        "image_link": "https://www.phonemart.ng/wp-content/uploads/2024/06/15-promax.jpeg",
        "description": "Apple has once again raised the bar with the iPhone 15 Pro, the latest addition to its flagship smartphone lineup. This year’s model introduces a sleek titanium design, making it both lighter and more durable than its predecessor. Under the hood, the A17 Pro chip delivers unprecedented performance, enabling faster processing, enhanced graphics, and improved energy efficiency. The camera system has also received a significant upgrade, featuring a 48MP main sensor, a 5x telephoto lens for stunning zoom capabilities, and advanced computational photography for low-light environments. In a historic move, Apple has replaced the Lightning port with USB-C, aligning with global standards and offering faster data transfer and charging speeds. The iPhone 15 Pro is a testament to Apple’s commitment to innovation and user experience."
      },
      {
        "name": "Samsung Galaxy Z Fold 5",
        "image_link": "https://images.samsung.com/is/image/samsung/assets/bd/smartphones/galaxy-z-fold5/images/galaxy-z-fold5-highlights-sustainability-mo.jpg?imbypass=true",
        "description": "Samsung continues to dominate the foldable smartphone market with the Galaxy Z Fold 5, a device that combines cutting-edge technology with practical functionality. The Z Fold 5 features a 7.6-inch Dynamic AMOLED display that folds seamlessly, offering users the versatility of a tablet and the portability of a smartphone. Powered by the Snapdragon 8 Gen 2 chip, this device delivers top-tier performance, whether you’re multitasking, gaming, or streaming. The hinge mechanism has been refined for improved durability, and the device is now lighter and more compact. With its enhanced S Pen compatibility and advanced multitasking features, the Galaxy Z Fold 5 is a productivity powerhouse. Samsung has also upgraded the camera system, ensuring that users can capture professional-quality photos and videos. For those seeking innovation and flexibility, the Z Fold 5 is a game-changer."
      },
      {
        "name": "Sony WH-1000XM5",
        "image_link": "https://diamu.com.bd/wp-content/uploads/2022/05/Sony-WH-1000XM5-Wireless-Noise-Canceling-Headphones-1.jpg",
        "description": "Sony’s WH-1000XM5 headphones have set a new standard for premium audio experiences. Building on the success of the XM4, the XM5 boasts improved noise-canceling technology that adapts to your environment in real-time, ensuring an immersive listening experience whether you’re on a noisy flight or in a bustling café. The sound quality is nothing short of exceptional, with rich bass, clear mids, and crisp highs, thanks to Sony’s proprietary audio processing algorithms. Comfort has also been prioritized, with a lightweight design and plush ear cushions that make long listening sessions a breeze. Battery life remains impressive, offering up to 30 hours of playback on a single charge. Additionally, the XM5 supports multi-device connectivity and features intuitive touch controls. For audiophiles and frequent travelers alike, the WH-1000XM5 is the ultimate companion."
      },
      {
        "name": "Apple Watch Ultra 2",
        "image_link": "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYQ53ref_VW_34FR+watch-case-49-titanium-black-ultra2_VW_34FR+watch-face-49-trail-ultra2_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=Y2NGMUk3Y0o5bUFRQ05UVGRuaEtFM2pDV2hhem5qNnpDenFtKzI1OXdzWjRaeVR4RW9XWXhWVHRHeXZEa3AwcGZsNDErT2hQbWVmS0VCWlVweVY1UGk2WlJRNE54YUdoN0JGYWIxb3RNejN1WDdBMEYxOHdORVUzNUYwZW1oWG1RNjMyWnVvUG5OaUp1YWFFeUM2QmI2c0dDUGtHRjJ4SWtBTUxrSTdwRTI3bTUyQ1MxU1UvNlByY3lHWllzVjF5T3hGaHhOWmQ0TEdFQ1pIWVhrdU1oUFV1U0dtR29TZGVEaVVPVzB0LzM5OA",
        "description": "The Apple Watch Ultra 2 is Apple’s most rugged and capable smartwatch yet, designed for adventurers, athletes, and outdoor enthusiasts. Featuring a durable titanium case and a sapphire crystal display, this watch is built to withstand extreme conditions. The always-on Retina display is brighter than ever, ensuring visibility even in direct sunlight. With advanced health and fitness tracking features, including heart rate monitoring, blood oxygen measurement, and ECG capabilities, the Ultra 2 is a powerful tool for maintaining your well-being. It also includes specialized apps for diving, hiking, and endurance sports, making it a versatile companion for any activity. Water-resistant up to 100 meters and equipped with a battery that lasts up to 36 hours, the Apple Watch Ultra 2 is ready to tackle any challenge. Apple has once again proven its ability to blend innovation with practicality, creating a device that’s as tough as its users."
      }
    ]
  }

const GadgetUpdate = () => {

    console.log(updatedGadgets)

    const [expanded, setExpanded] = useState({});

    const toggleExpand = (name) => {
      setExpanded((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    };

    return (
        <div className="w-full">
          {/* Banner Section */}
          <div className="text-center bg-[#9538E2] text-white py-20 ">
            <h2 className="text-3xl font-bold mb-4 w-[80%] m-auto">
              Gadget Update
            </h2>
            <p className="text-lg mb-8 w-[60%] m-auto">
              Explore the latest gadgets that will take your experience to the next
              level. From smart devices to the coolest accessories, we have it all!
            </p>
            
          </div>
    
          {/* Product Details Section */}
    
          <div className=" mx-auto p-10">
            
    
            {/* <div className="space-y-4">
              {updatedGadgets.gadgets.map((item) => (
                <div
                  key={item.name}
                  className="flex items-start gap-4 p-4 bg-white rounded-lg shadow"
                >
                  <img src={item.image_link} alt="" className="w-16 h-16" />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h2 className="font-semibold">{item.name}</h2>
                      
                    </div>
                    <p className="text-gray-600 ">{item.description}</p>
                    
                    
                  </div>
                </div>
              ))}
            </div> */}

<div className="space-y-4">
      {updatedGadgets.gadgets.map((item) => (
        <div
          key={item.name}
          className="flex items-start gap-4 p-4 bg-white rounded-lg shadow"
        >
          {/* Image with conditional size */}
          <img
            src={item.image_link}
            alt={item.name}
            className={`transition-all duration-300 ${
              expanded[item.name] ? "w-32 h-32" : "w-16 h-16"
            } rounded-lg object-cover`}
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h2 className="font-semibold text-lg">{item.name}</h2>
            </div>
            {/* Description with conditional truncation */}
            <p
              className={`text-gray-600 mt-2 ${
                expanded[item.name] ? "" : "line-clamp-2"
              }`}
            >
              {item.description}
            </p>
            {/* See More/See Less button */}
            <button
              onClick={() => toggleExpand(item.name)}
              className="text-blue-500 hover:underline mt-2"
            >
              {expanded[item.name] ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      ))}
    </div>
          </div>
        </div>
      );
};

export default GadgetUpdate;