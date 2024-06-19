import Image from 'next/image';

interface HeroProps {
  text: string;
  imageUrl: string;
  height: "small" | "large";
}

const Hero: React.FC<HeroProps> = ({ text, imageUrl, height }) => {
  return (
    <section className={`relative ${height === "small" ? "h-24 lg:h-48" : "h-64 lg:h-96"} overflow-hidden mb-4 lg:mb-8`}>
      {/* Image container */}
      <div className="absolute inset-0">
        <Image
          src={imageUrl}
          alt="Hero Image"
          fill={true}
          objectFit="cover"
          quality={100}
          objectPosition={height === 'small' ? 'initial' : '0% 25%'}
          priority={true}
          placeholder='empty'
        />
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>

      {/* Overlay for text */}
      <div className="relative flex items-center justify-center h-full text-center">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">{text}</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
