import { FC, useRef, ReactNode } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

interface Props {
  className?: string;
  children: ReactNode;
}


const PictureCarousel: FC<Props> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={classNames(styles.carouselContainer)}
      ref={containerRef}
    >
      <div className={classNames(styles.carouselLayout, className)}>
        {children}
      </div>
    </div>
  );
};

export default PictureCarousel;
