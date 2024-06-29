import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({ service }) => {
  const { img, title, price,_id } = service || {};
  return (
    <div className="card card-compact w-96 shadow-xl rounded-lg overflow-hidden bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <figure className="relative">
        <Image src={img} alt={title} height={180} width={430} className="rounded-t-lg" />
      </figure>
      <div className="card-body p-6 bg-gradient-to-b from-white via-orange-50 to-orange-100">
        <h2 className="card-title text-orange-600 font-bold text-xl mb-2">{title}</h2>
        <div className="card-actions justify-between items-center">
          <h6 className="text-orange-500 font-semibold">Price: ${price}</h6>
          <Link href={`/services/${_id}`}><button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white px-4 py-2 rounded-full shadow-md transition-all duration-300 flex items-center">
            View Details <FaArrowRight className="ml-2" />
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
