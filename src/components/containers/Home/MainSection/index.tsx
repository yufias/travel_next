import Container from '../../../Container'
import PromoCarousel from './PromoCarousel'
import Packages from './Packages';
import Categories from './Categories';
import Testimonials from './Testimonials';
import styles from './MainSection.module.css'
import 'react-multi-carousel/lib/styles.css';

const MainSection = () => {
    return(
        <section className={styles.section}>
            <Container>
                <PromoCarousel />
                <Packages />
                <Categories />
                <Testimonials />
            </Container>
        </section>
    )
}

export default MainSection