import { useSelector } from "react-redux";
import style from "../ItemShoppingCart/ItemShoppingCart.module.css";
import imageIpad from "../../assets/ipad-dorso-anverso.svg";
import imageSamsung from "../../assets/tablet-samsung-anverso-dorso.svg";

const ItemShoppingCart = () => {
  // const itemProduct = useSelector((state) => state.productAddToCart)
  const itemProduct = [
    {
      id: 1,
      price: 1099,
      isActive: true,
      category: null,
      model: "iPad Pro",
      processor: "Apple M1",
      screen: "12.9 inches",
      hardcore: "256GB",
      usetype: null,
      Ram: "8GB",
      videoCard: "Apple M1",
      operatingSystem: "iPadOS",
      dimensions: "28.06 x 21.49 x 0.59 cm",
      weight: null,
      batteryLife: "Up to 10 hours",
      connectivity: "Wi-Fi, Bluetooth",
      warranty: "12 months",
      description:
        "The iPad Pro offers a seamless user experience with its sleek design and intuitive interface. Its large 12.9-inch display provides vibrant visuals, while the powerful M1 processor ensures smooth performance for all tasks. With up to 10 hours of battery life, it's perfect for work or entertainment on the go.",
      internalmemory: null,
      camera: null,
      sound: null,
      compatibility: null,
      extrafunctions: null,
      waterproof: null,
      touchControl: null,
      microphone: null,
      lights: null,
      design: null,
      keycapDesign: null,
      mediaKeys: null,
      wirelessRange: null,
      createdAt: "2024-02-17T15:08:19.394Z",
      updatedAt: "2024-02-17T15:08:19.394Z",
      image: imageIpad,
    },
    {
      id: 2,
      category: "tablet",
      model: "Samsung Galaxy Tab S7+",
      processor: "Qualcomm Snapdragon 865+",
      screen: "12.4 inches",
      hardcore: "256GB",
      "use-type": "Tablet",
      Ram: "8GB",
      "video-card": "Adreno 650",
      price: "$849",
      "operating-sistem": "Android",
      dimensions: "28.6 x 18.5 x 0.59 cm",
      weight: "575 grams",
      "battery-life": "Up to 14 hours",
      connectivity: "Wi-Fi, Bluetooth",
      warranty: "12 months",
      description:
        "The Samsung Galaxy Tab S7+ is designed for users seeking a premium tablet experience. With its large, high-quality display and powerful performance, it's perfect for professionals, creatives, and multimedia enthusiasts. The included S Pen stylus enhances productivity and creativity, making it an ideal choice for those who need versatility on the go.",
      image: imageSamsung,
    },
  ];

  return (
    <>
      <div className={style.containerItem}>
        <ul className={style.listUL}>
          {itemProduct?.map((product) => (
            <>
              <li className={style.listLi}>
                <div className={style.detailProduct}>
                  <div>
                    <form action="">
                      <button className={style.removeProduct}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="hover:text-accent-3 mx-[1px] h-4 w-4 text-white dark:text-black"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          ></path>
                        </svg>
                      </button>
                    </form>
                  </div>
                    <div className={style.divImageProduct}>
                      <img className={style.imgProduct} src={imageIpad} alt=""  />

                    </div>

                  <h4>{product.name}</h4>
                  <h5>{`${product.price}.00`}</h5>
                  <br />
                  <button>Eliminar uno</button>
                  <br />
                  <button>Eliminar todos</button>
                </div>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
export default ItemShoppingCart;
