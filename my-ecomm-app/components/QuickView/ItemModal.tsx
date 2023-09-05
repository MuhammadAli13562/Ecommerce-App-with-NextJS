"use client";

import { Modal } from "react-overlays";
import { useRecoilState, useRecoilValue } from "recoil";
import { ModalDisplayState, ModalItemState } from "utils/atoms/atom";
import { styled } from "styled-components";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

const ItemModalDesign = styled(Modal)`
  position: fixed;
  width: 50%;
  z-index: 1040;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
export default function ItemModal() {
  const [showModal, setshowModal] = useRecoilState(ModalDisplayState);

  const renderBackdrop = (props: any) => <Backdrop {...props} />;

  return (
    <ItemModalDesign
      show={showModal}
      onHide={() => setshowModal(false)}
      renderBackdrop={renderBackdrop}
    >
      <ModalContent />
    </ItemModalDesign>
  );
}

const ModalContent = () => {
  const ItemData = useRecoilValue(ModalItemState);

  return (
    <div className="flex flex-col gap-y-4 ">
      <div className="flex justify-evenly gap-x-20">
        <Image
          src={ItemData?.ItemImage as StaticImageData}
          alt="img"
          width={400}
          height={150}
        />

        <div className="flex justify-between w-2/5">
          <div id="descript" className=" flex flex-col ">
            <div className="text-2xl ">{ItemData?.ItemName}</div>
            <div className="text-gray-300">
              _______________________________________
            </div>
            <div className="mt-2">Rs {ItemData?.ItemPrice} </div>
            <div className="text-sm text-gray-500">
              Tax included. Shipping calculated at checkout
            </div>
            <div className="text-gray-300 mt-6">
              _______________________________________
            </div>
            <CartOperations />
          </div>
        </div>
      </div>
      <ReviewContent />
    </div>
  );
};

const ReviewContent = () => {
  return (
    <div
      id="Rating-wrapper"
      className="flex flex-col items-center w-full border-2 border-black"
    >
      <div className="text-2xl">Reviews</div>
    </div>
  );
};

const CartOperations = () => {
  const [size, setSize] = useState("X");
  const [Quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex mt-2 text-sm">SIZE</div>
      <div id="size-buttons" className="flex mt-2 gap-x-2">
        <button
          disabled={size === "S"}
          onClick={() => setSize("S")}
          className="border-2 border-black p-2 w-1/6 disabled:bg-black disabled:text-white"
        >
          S
        </button>
        <button
          disabled={size === "M"}
          onClick={() => setSize("M")}
          className="border-2 border-black p-2 w-1/6 disabled:bg-black disabled:text-white"
        >
          M
        </button>
        <button
          disabled={size === "X"}
          onClick={() => setSize("X")}
          className="border-2 border-black p-2 w-1/6 border-2 border-black p-2 w-1/6 disabled:bg-black disabled:text-white"
        >
          X
        </button>
        <button
          disabled={size === "XL"}
          onClick={() => setSize("XL")}
          className="border-2 border-black p-2 w-1/6 disabled:bg-black disabled:text-white"
        >
          XL
        </button>
      </div>
      <div id="number-buttons">
        <div className="flex mt-8 text-sm">QUANTITY</div>
        <div className="flex mt-2 ">
          <button
            className="bg-gray-300 text-2xl w-8 pr-2 pl-2 border-2 border-black active:bg-black active:text-white"
            onClick={() =>
              setQuantity((prev) => {
                if (prev === 1) {
                  return prev;
                }
                return prev - 1;
              })
            }
          >
            -
          </button>
          <input
            value={Quantity}
            className="text-center  border-black border-t-2 border-b-2 border-black w-10 "
          />
          <button
            className="bg-gray-300 text-2xl w-8 pr-2 pl-2 border-2 border-black active:bg-black active:text-white"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
      <button className="mt-8 text-white bg-black p-2 border-2 hover:bg-white hover:text-black hover:border-2 border-black border-solid">
        Add to Cart
      </button>
    </>
  );
};
