import Image from "next/image"
import star from "../../../../../../../public/assets/icons/yellow-star.svg"

const Rating = () =>{
    return(
        <div className="flex gap-1 align-center">
            {Array.from({length: 5}).map((_, index) => {
                return(
                    <Image
                        src={star} 
                        alt="rating"
                        height="20"
                        width="20"
                    />
                )
            })}
        </div>
    )
}

export default Rating