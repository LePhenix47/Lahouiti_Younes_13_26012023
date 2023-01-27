//Next
import { log } from "@/utils/functions/helperFunctions";
import Image from "next/image";

import chatIcon from "../../../public/images/svg/icon-chat.svg";

export default function Advantage({
  image,
  title,
  text,
}: {
  image: any;
  title: string;
  text: string;
}): JSX.Element {
  log(chatIcon);
  return (
    <div className="advantage">
      <div className="advantage__image-container">
        <Image
          src={image}
          alt={title}
          width={100}
          height={100}
          className="advantage__image"
        />
      </div>
      <div className="advantage__text-container">
        <h3 className="advantage__title">{title}</h3>
        <p className="advantage__text">{text}</p>
      </div>
    </div>
  );
}
