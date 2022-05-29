import Image from "next/image"
import Button from "../../../../../Button"
import Borobudur from '../../../../../../../public/assets/home/borobudur.png'

const PromoCard = ({detail}) => {
    console.log()
    const discount = Number(detail.price) * Number(detail.discount)/100
    const discountedPrice = Number(detail.price) - Number(discount)
    return(
        <article className="bg-white shadow-lg rounded-xl overflow-hidden w-[500px] h-[312px] flex">
            <figure className="relative w-[212px] h-full">
                <Image 
                    src={Borobudur}
                    alt="borobudur"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />

            </figure>
            <div className="flex flex-col flex-1 justify-center p-4">
                <p className="text-heading-4 text-gray-100 font-label font-bold">
                    {detail.city}
                </p>
                <p className="text-heading-3 text-gray-70 mb-4">
                    {detail.country}
                </p>

                <div className="flex gap-1">
                    <p className="text-heading-5 text-gray-70 line-through">
                        {`Rp. ${Number(detail.price).toLocaleString()}`}
                    </p>
                    <p className="text-heading-5 text-red-100 font-bold">
                        {`${detail.discount}%`}
                    </p>
                </div>

                <p className="font-bold text-gray-100 mb-4 text-[16px]">
                    {`Rp. ${discountedPrice.toLocaleString()}`}
                </p>

                <p className="text-heading-5 text-gray-70-mb-4">
                    {detail.detail}
                </p>
                <p className="text-heading-5 text-gray-50 mb-4">
                    {detail.departure}
                </p>

                <div className="flex justify-between gap-3">
                    <Button outline fullWidth>
                        Lihat Detail
                    </Button>
                    <Button fullWidth>
                        Pesan
                    </Button>
                </div>
            </div>
        </article>
    )
}

export default PromoCard