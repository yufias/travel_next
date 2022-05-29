import Image from "next/image"
import Rating from "./Rating.index"
import Profile from "../../../../../../../public/assets/home/profile.png"

const TestimonialCard = () => {
    return(
        <article className="flex flex-col bg-white rounded-xl shadow p-4 w-[288px] h-[281px]">
            <div className="flex mb-4">
                <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
                    <Image
                        src={Profile}
                        alt="User"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </figure>

                <div className="flex flex-col">
                    <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
                        Arthur Morgan
                    </p>
                    <p className="text-heading-5 text-gray-50 font-bold">
                        Surabaya, Jawa Timur
                    </p>
                </div>

            </div>
            <Rating />

            <p className="text-heading-5 text-gray-70 my-4">
                Nyari tempat oleh-oleh gampang, tour guide ramah dan enak diajak ngobrol. penginapan nyaman
            </p>
            <p className="text-heading-5 text-gray-100 font-bold">
                Malang, Jawa Timur
            </p>
            <p className="text-heading-6 text-gray-50">
                01-03-2022
            </p>
        </article>
    )
}

export default TestimonialCard