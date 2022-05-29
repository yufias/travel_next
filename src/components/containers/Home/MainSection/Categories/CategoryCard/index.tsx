import Image from "next/image"
import Bromo from "../../../../../../../public/assets/home/bromo.png"

const CategoryCard = () => {
    return(
        <article className="flex flex-col w-[182px]">
            <figure className="relative w-full rounded-xl overflow-hidden mb-5 h-[179px]">
                <Image
                    src={Bromo}
                    alt="bromo"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
            </figure>   

            <p className="text-heading-3 text-gray-100 font-bo">
                Gunung
            </p>
        </article>
    )
}

export default CategoryCard