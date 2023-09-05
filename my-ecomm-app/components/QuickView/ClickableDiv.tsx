"use client";

import { StaticImageData } from "next/image";
import { useSetRecoilState } from "recoil";
import { ModalDisplayState, ModalItemState } from "utils/atoms/atom";

type itemType = {
  ItemName: String;
  ItemImage: StaticImageData;
  ItemPrice: String;
};

export default function ClickableDiv({ item }: { item: itemType }) {
  const setModalDisplay = useSetRecoilState(ModalDisplayState);
  const setModalItem = useSetRecoilState(ModalItemState);

  function handleClick() {
    setModalItem(item);
    setModalDisplay(true);
  }

  return (
    <button
      onClick={handleClick}
      className="absolute h-full w-full z-10 border-solid  border-red-300"
    ></button>
  );
}
