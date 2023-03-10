//Next
import Image from "next/image";

//Utils
import { log } from "../../utils/functions/helper-functions";

/**
 * Card for the home page for the different slogans of the website
 */
export default function AdvantageCard({
  image,
  title,
  text,
}: {
  image: any;
  title: string;
  text: string;
}): JSX.Element {
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
