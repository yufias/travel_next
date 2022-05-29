import Link from "next/link"

type Props = {
    label: string,
    href: string
}

const NavItem = ({ label, href = '/' }: Props) => {
    return (
        <Link href={href}>
            <a className="text-heading-4 font-bold text-gray-70">
                {label}
            </a>
        </Link>
    )
}

export default NavItem