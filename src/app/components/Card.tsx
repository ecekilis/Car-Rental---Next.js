import Image from "next/image";
import { Car } from "../types";
import gas from "@/app/assets/icons/gas (1).svg";
import mile from "@/app/assets/icons/mile.svg";
import transmission from "@/app/assets/icons/transmission.svg";
import arrow from "@/app/assets/icons/arr.svg";
import Link from "next/link";


type Props = {
    car: Car;
};

const Card = ({ car }: Props) => {
    // ekrana basaraken kod tekrarı oluşmaması için bir dizi tanımladık
    const arr = [
        {
            icon: mile,
            name: car.mileage + " Miles",
        },
        {
            icon: gas,
            name: car.fuelType,
        },
        {
            icon: transmission,
            name: car.transmission,
        },
    ];

    return (
        <div className='border shadow rounded transition hover:shadow-lg'>
            <div className='relative h-[250px] '>
                <Image fill src={car.imageUrl}
                    alt={car.make} unoptimized
                    className='object-contain' />

            </div>
            <div className='py-5 px-10 sm:px-5'>
                <h2 className='font-semibold text-xl'>{car.make} {car.model}</h2>
                <hr className='border-gray-300/50 mt-2 mb-4' />
                <div className="flex justify-between">
                    {arr.map((item) =>
                        <div className="flex flex-col gap-2 items-center">
                            <Image src={item.icon} alt="icon" />
                            <p className="text-lg sm:text-base">{item.name}</p>
                        </div>

                    )}
                </div>
                <hr className='border-gray-300/50 mt-4 mb-2' />
                <div className="flex justify-between text-xl">
                    <p className="text-2xl sm:text-xl font-bold"> ${car.price}</p>
                    <Link href={`/car/${car._id}`} className="text-blue-500 text-2xl hover:text-blue-800 transition sm:text-xl flex gap-3 items-center">Detay
                        <Image src={arrow} alt="arrow" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Card
