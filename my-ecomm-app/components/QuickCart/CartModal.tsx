import { Modal } from "react-overlays";
import { styled } from "styled-components";
import img5 from "../../public/featured/slide5.jpg";
import img6 from "../../public/featured/slide6.webp";

const CartModalDesign = styled(Modal)`
  position: fixed;
  width: 20%;
  z-index: 1040;
  top: 0%;
  left: 0%;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;

const Backdrop = styled("div")`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #3a3b3a;
  opacity: 0.5;
`;

export default function CartModal() {
  return <></>;
}

const cart = [
  {
    userID: "m.ali8.aj8@gmail.com",
    cartID: "546865686ASD68764FF687",
    cartItems: [
      {
        ItemImage: img5,
        ItemName: "ATA-BLACK MUSCLE-FIT PREMIUM LYCRA TEE",
        ItemPrice: "1,800",
      },
      {
        ItemImage: img6,
        ItemName: "ATA-WHITE MUSCLE-FIT PREMIUM LYCRA TEE",
        ItemPrice: "1,800",
      },
    ],
  },
];
