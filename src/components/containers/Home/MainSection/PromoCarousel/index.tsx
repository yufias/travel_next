import Carousel from 'react-multi-carousel'
import RightArrow from '../../../../../../public/assets/icons/right-arrow-rounded.svg'
import LeftArrow from '../../../../../../public/assets/icons/left-arrow-rounded.svg'
import PromoCard from './PromoCard'
import Image from 'next/image'

const PromoCarousel = () => {
    const promoList = [
        {
            city: 'Borboudur, Yogyakarta',
            country: 'Indonesia',
            price: '7700000',
            discount: '10',
            detail: 'Untuk 2 orang, makan 2x sehari, penginapan 5 malam, tour guide',
            departure: 'Berangkat: 22-08-2022 06:00'
        },
        {
            city: 'Baturraden, Purwokerto',
            country: 'Indonesia',
            price: '5300000',
            discount: '5',
            detail: 'Untuk 1 orang, makan 2x sehari, penginapan 3 malam, tour guide',
            departure: 'Berangkat: 12-09-2022 08:00'
        },
        {
            city: 'Puncak, Bogor',
            country: 'Indonesia',
            price: '2100000',
            discount: '0',
            detail: 'Untuk 3 orang, makan 2x sehari, penginapan 2 malam, tour guide',
            departure: 'Berangkat: 14-07-2022 07:00'
        },
        {
            city: 'Cihampelas, Bandung',
            country: 'Indonesia',
            price: '4300000',
            discount: '20',
            detail: 'Untuk 1 orang, makan 2x sehari, penginapan 4 malam, tour guide',
            departure: 'Berangkat: 26-08-2022 09:00'
        },
        {
            city: 'Dieng, Wonosobo',
            country: 'Indonesia',
            price: '9200000',
            discount: '10',
            detail: 'Untuk 1 orang, makan 2x sehari, penginapan 6 malam, tour guide',
            departure: 'Berangkat: 22-08-2022 06:00'
        },

    ]

    return(
        <>
            <h3 className="text-heading-3 text-white font-bold font-label pt-14 mb-4">
                Promo Liburan
            </h3>

            <Carousel
                className='py-5'
                containerClass='carousel-container'
                arrows
                centerMode={false}
                draggable
                swipeable
                customRightArrow={
                    <button type="button" aria-label="Go to next slide" className="absolute z-50 right-0 opacity-50 hover:opacity-100">
                        <Image
                            src={RightArrow}
                            height="75"
                            width="75"
                        />
                    </button>
                }
                customLeftArrow={
                    <button type="button" aria-label="Go to previous slide" className="absolute z-50 right-0 opacity-50 hover:opacity-100">
                        <Image
                            src={LeftArrow}
                            height="75"
                            width="75"
                        />
                    </button>
                }
                partialVisbile
                responsive={{
                    desktop: {
                        breakpoint: {
                            max: 3000,
                            min: 720
                        },
                        items: 2,
                        partialVisibilityGutter: 100
                    },
                }}
            >
                {promoList.map((promo, index) => {
                    return(
                        <PromoCard 
                            key={index}
                            detail={promo}
                        />
                    )
                })}
                {/* <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard />
                <PromoCard /> */}
            </Carousel>
        </>
    )
}

export default PromoCarousel