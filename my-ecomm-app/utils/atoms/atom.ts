import { StaticImageData } from "next/image";
import { atom } from "recoil";

type itemType = {
  ItemName: String;
  ItemImage: StaticImageData;
  ItemPrice: String;
};

export const ModalDisplayState = atom({
  key: "ModalDisplay",
  default: false,
});

export const ModalItemState = atom<itemType | null>({
  key: "ModalItem",
  default: null,
});
