import styles from './TopSection.module.css'
import Container from '../../../Container'
import Button from '../../../Button'
import InfoItem from './InfoItem'

const TopSection = () => {
    return (
        <section className={styles.section}>
            <Container>
                <div className="flex flex-col pt-[112px] pb-[58px]">
                    <div className="flex flex-col mb-[174px]">
                        <h1 className="text-heading-2 font-bold text-gray-100 mb-8 w-[500px]">
                            Jelajahi Dunia Yang Indah Dengan Satu Sentuhan
                        </h1>
                        
                        <p className="text-heading-3 text-gray-70 mb-7 w-[526px]">
                            Jelajahi dunia yang indah dengan satu sentuhan dengan pesatn tiket di Travel Next kamu akan dapatkan Pelayanan
                            terbaik untuk wisata liburanmu kemana saja dan kapan saja.
                        </p>

                        <Button className='w-[186px]'>
                            Lihat Paket
                        </Button>
                    </div>
                    
                    <div className="flex gap-40 mx-auto">
                        <InfoItem
                            label="+30"
                            subLabel="Negara" 
                        />
                        <InfoItem
                            label="+1500"
                            subLabel="Penginapan" 
                        />
                        <InfoItem
                            label="+100"
                            subLabel="Tempat Wisata" 
                        />
                        <InfoItem
                            label="+50.000"
                            subLabel="Pelanggan" 
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TopSection