import style from "./CarouselDetail.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageIpad from "./../../assets/ipad-dorso-anverso.svg";
import imageAmazon from "./../../assets/tablet-amazon.svg";
import imageGoogle from "./../../assets/tablet-google.svg";
import imageHuawei from "./../../assets/tablet-huawei.svg";
import imageLenovo from "./../../assets/tablet-lenovo.svg";
import imageMicrosoft from "./../../assets/tablet-microsoft.svg";
import imageSamsung from "./../../assets/tablet-samsung-anverso-dorso.svg";
import { Link } from "react-router-dom";

const productosCategoria = [
  {
    id: 1,
    category: "tablet",
    model: "iPad Pro",
    processor: "Apple M1",
    screen: "12.9 inches",
    hardcore: "256GB",
    "use-type": "Tablet",
    Ram: "8GB",
    "video-card": "Apple M1",
    price: "$1099",
    "operating-sistem": "iPadOS",
    dimensions: "28.06 x 21.49 x 0.59 cm",
    weight: "682 grams",
    "battery-life": "Up to 10 hours",
    connectivity: "Wi-Fi, Bluetooth",
    warranty: "12 months",
    description:
      "The iPad Pro offers a seamless user experience with its sleek design and intuitive interface. Its large 12.9-inch display provides vibrant visuals, while the powerful M1 processor ensures smooth performance for all tasks. With up to 10 hours of battery life, it's perfect for work or entertainment on the go.",
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
  {
    id: 3,
    category: "tablet",
    model: "Microsoft Surface Pro 8",
    processor: "11th Gen Intel Core i5",
    screen: "13 inches",
    hardcore: "256GB",
    "use-type": "Tablet",
    Ram: "8GB",
    "video-card": "Intel Iris Xe Graphics",
    price: "$999",
    "operating-sistem": "Windows 11",
    dimensions: "29.21 x 20.07 x 0.84 cm",
    weight: "770 grams",
    "battery-life": "Up to 16 hours",
    connectivity: "Wi-Fi, Bluetooth",
    warranty: "12 months",
    description:
      "The Microsoft Surface Pro 8 offers a versatile computing experience tailored for productivity-focused users. Its sleek design and powerful performance make it ideal for professionals, students, and creatives who need a portable yet capable device. With its detachable keyboard and touch screen functionality, it seamlessly transitions between laptop and tablet modes, catering to a variety of work styles.",
    image: imageMicrosoft,
  },
  {
    id: 4,
    category: "tablet",
    model: "Lenovo Tab P11 Pro",
    processor: "Qualcomm Snapdragon 870",
    screen: "11.5 inches",
    hardcore: "128GB",
    "use-type": "Tablet",
    Ram: "6GB",
    "video-card": "Adreno 650",
    price: "$499",
    "operating-sistem": "Android",
    dimensions: "26.7 x 17.1 x 0.56 cm",
    weight: "485 grams",
    "battery-life": "Up to 15 hours",
    connectivity: "Wi-Fi, Bluetooth",
    warranty: "12 months",
    description:
      "The Lenovo Tab P11 Pro is designed for users seeking a balance of productivity and entertainment. With its sleek design and powerful performance, it's perfect for both work and play. The tablet's vibrant display and long battery life make it great for multimedia consumption, while its productivity features cater to users who need to get things done on the go. Whether you're streaming content, browsing the web, or working on documents, the Tab P11 Pro offers a versatile and enjoyable experience.",
    image: imageLenovo,
  },
  {
    id: 5,
    category: "tablet",
    model: "Huawei MatePad Pro",
    processor: "HiSilicon Kirin 9000E",
    screen: "12.6 inches",
    hardcore: "256GB",
    "use-type": "Tablet",
    Ram: "8GB",
    "video-card": "Mali-G78 MP24",
    price: "$799",
    "operating-sistem": "HarmonyOS",
    dimensions: "28.5 x 18.5 x 0.64 cm",
    weight: "609 grams",
    "battery-life": "Up to 10 hours",
    connectivity: "Wi-Fi, Bluetooth",
    warranty: "12 months",
    description:
      "The Lenovo Tab P11 Pro offers a sleek design, powerful performance, and long battery life, making it perfect for both work and entertainment. With its vibrant display and productivity features, it's ideal for users on the go seeking a versatile experience.",
    image: imageHuawei,
  },
];

const CarouselDetail = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={style.contenedor}>
        <h1 className={style.tittle}>Related Products</h1>
        <Carousel responsive={responsive}>
          {productosCategoria &&
            productosCategoria.map((product) => (
              <section key={product.id} className={style.sectionContainer}>
                <Link
                  to={`/detail/${product.id}`}
                  className={style.linkDetail}
                  onClick={scroll}
                >
                  <div className={style.card}>
                    <div className={style.divImage}>
                      <img
                        src={product.image}
                        className={style.productImage}
                        alt="Imagen producto de tecnologia"
                      />
                    </div>
                    <div className={style.info}>
                      <p className={style.p}>{product.model}</p>
                      <button
                        className={style.button}
                      >{`${product.price} USD`}</button>
                    </div>
                  </div>
                </Link>
              </section>
            ))}
        </Carousel>
      </div>
    </>
  );
};
export default CarouselDetail;
