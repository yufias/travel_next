import Image from 'next/image'
import Logo from '../../../../public/assets/travelo-logo-header.png'
import Container from '../../Container'
import Search from './Search'
import Nav from './Nav'
import Button from '../../Button'

const Header = () => {
    return (
        <header className="h-[85px] bg-white shadow-lg p-4">
            <Container>
                <div className="flex justify-between items-center">
                    <div className="flex">
                        <Image
                            src={Logo}
                            alt="Logo"
                            height="48"
                            width="182"
                            placeholder='blur'
                        />
                        <Search />
                    </div>
                    <div className="flex gap-5">
                        <Nav />
                        <Button className='w-[150px]'>
                            Masuk
                        </Button>
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header