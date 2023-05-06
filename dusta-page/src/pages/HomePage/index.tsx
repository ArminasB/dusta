import { FC, useState, MouseEventHandler } from "react";
import styles from "./index.module.scss";
import HeroSection from "../../components/HeroSection";
import AboutSection from "../../components/AboutSection";
import ContactsSection from "../../components/ContactsSection";
import PictureCarousel from "../../components/PictureCarousel";
import ImagesModal from "../../components/PictureModal";
import { images } from "../../constants/images";

const HomePage: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePictureClick: MouseEventHandler<HTMLImageElement> = (event) => {
    const index = parseInt(
      event.currentTarget.getAttribute("data-index") || "0",
      10
    );
    setCurrentIndex(index);
    return setIsModalOpen(true);
  };

  const handleCloseButton = () => {
    setIsModalOpen(false);
    return setCurrentIndex(0);
  };
  return (
    <article className={styles.homePage}>
      <HeroSection />
      <AboutSection />
      <ContactsSection />
      <PictureCarousel>
        {images.map((image, index) => {
          return (
            <div
              className={styles.carouselImageContainer}
              key={image.alt + index + 1}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={styles.image}
                data-index={index}
                onClick={handlePictureClick}
              />
            </div>
          );
        })}
      </PictureCarousel>
      {isModalOpen && (
        <ImagesModal
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={handleCloseButton}
        >
          {images.map((image, index) => {
            return (
              <img
                src={image.src}
                alt={image.alt}
                key={image.alt + index + 2}
              />
            );
          })}
        </ImagesModal>
      )}
    </article>
  );
};

export default HomePage;
