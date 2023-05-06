import {
  FC,
  useState,
  useEffect,
  ReactNode,
  Children,
  SetStateAction,
  Dispatch,
  TouchEvent,
} from "react";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../Button";

interface Props {
  children: ReactNode;
  currentIndex: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  onClose: (param: boolean) => void;
}

const PictureModal: FC<Props> = ({
  children,
  currentIndex,
  setCurrentIndex,
  onClose,
}) => {
  const [length, setLength] = useState<number>(Children.count(children));
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  useEffect(() => {
    return setLength(Children.count(children));
  }, [children]);

  const handleCloseButton = () => {
    if (onClose && typeof onClose === "function") {
      return onClose(false);
    }
    return null;
  };

  const nextImage = () => {
    if (currentIndex < length - 1) {
      return setCurrentIndex(() => currentIndex + 1);
    }
    return null;
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      return setCurrentIndex(() => currentIndex - 1);
    }
    return null;
  };

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touchDown = e.touches[0].clientX;
    return setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      nextImage();
    }

    if (diff < -5) {
      prevImage();
    }

    return setTouchPosition(null);
  };
  return (
    <div className={styles.modalBackground}>
      <Button
        buttonType={ButtonType.BUTTON}
        className={styles.closeButton}
        onClick={handleCloseButton}
      />
      {currentIndex > 0 && (
        <Button
          buttonType={ButtonType.BUTTON}
          className={styles.leftArrow}
          onClick={prevImage}
        />
      )}
      <div
        className={styles.modalCarouselContent}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        {children}
      </div>
      {currentIndex < length - 1 && (
        <Button
          buttonType={ButtonType.BUTTON}
          className={styles.rightArrow}
          onClick={nextImage}
        />
      )}
    </div>
  );
};

export default PictureModal;
