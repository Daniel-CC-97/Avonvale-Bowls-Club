import Image from "next/image";

interface FooterProps {
}

const Footer : React.FC<FooterProps> = () => {
    return (
        <div className=" bg-primary relative flex items-center justify-center h-20 mt-4 lg:mt-8">
            <Image
            src="/avonvale-logo.png"
            alt="Avonvale Bowls Club Logo"
            width={64}
            height={64}
            />
        </div>
    )
}

export default Footer;