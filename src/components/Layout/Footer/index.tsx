import Container from "../../Container"
import Logo from '../../../../public/assets/travelo-logo-footer.png'
import styles from './Footer.module.css'
import FooterInfo from "./FooterInfo"
import Image from "next/image"

const Footer = () => {
    const Year = new Date().getFullYear()
    return(
        <footer className={styles.footer}>
            <Container size="lg">
                <div className="flex bg-white p-16">
                    <figure>
                        <Image 
                            src={Logo}
                            alt="Logo"
                            height="98"
                            width="136"
                            placeholder="blur"
                        />
                    </figure>

                    <div className="flex flex-1 justify-between ml-[106px]">
                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Tentang Kami',
                                    href: "/"
                                },
                                {
                                    label: 'Testimonial',
                                    href: "/"
                                },
                                {
                                    label: 'Kontak',
                                    href: "/"
                                }
                            ]} 
                        />

                        <FooterInfo
                            title="Info"
                            content={[
                                {
                                    label: 'Syarat & Ketentuan',
                                    href: "/"
                                },
                                {
                                    label: 'Kebijakan privasi',
                                    href: "/"
                                },
                                {
                                    label: 'Blog',
                                    href: "/"
                                },
                                {
                                    label: 'Bantuan Pelayanan',
                                    href: "/"
                                },
                            ]} 
                        />

                        <FooterInfo
                            title="Info"
                            content={[
                                'Jl. Perintis Kemerdekaan 1',
                                'No.1, Cikokol Tangerang',
                                'Banten, Indonesia',
                                '(021)55346737',
                                'travelNext@mail.com'
                            ]} 
                        />
                    </div>
                </div>
            </Container>

            <div className="bg-blue-100 p-3">
                <p className="text-heading-5 text-white font-bold text-center">
                    Copyright {Year} Nama brand. All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer