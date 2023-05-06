import { FC, useState } from "react";
import classNames from "classnames";
import styles from "./index.module.scss";
import Button, { ButtonType } from "../Button";

enum ContentState {
  KOKYBE = "KOKYBE",
  GREITS = "GREITIS",
  KAINA = "KAINA",
}

interface Props {
  className?: string;
}

const AboutSection: FC<Props> = ({ className }) => {
  const [currentContent, setCurrentContent] = useState<ContentState>(
    ContentState.KOKYBE
  );

  const changeContentStateToKokybe = () => {
    return setCurrentContent(ContentState.KOKYBE);
  };
  const changeContentStateToGreitis = () => {
    return setCurrentContent(ContentState.GREITS);
  };
  const changeContentStateToKaina = () => {
    return setCurrentContent(ContentState.KAINA);
  };

  return (
    <section className={classNames(styles.aboutSection, className)}>
      <div className={styles.buttonContainer}>
        <Button
          buttonType={ButtonType.BUTTON}
          onClick={changeContentStateToKokybe}
          text={"Kokybė"}
          className={classNames(styles.stateButton, {
            [styles.stateButtonActive]: currentContent === ContentState.KOKYBE,
          })}
        />
        <Button
          buttonType={ButtonType.BUTTON}
          onClick={changeContentStateToGreitis}
          text={"Greitis"}
          className={classNames(styles.stateButton, {
            [styles.stateButtonActive]: currentContent === ContentState.GREITS,
          })}
        />
        <Button
          buttonType={ButtonType.BUTTON}
          onClick={changeContentStateToKaina}
          text={"Kaina"}
          className={classNames(styles.stateButton, {
            [styles.stateButtonActive]: currentContent === ContentState.KAINA,
          })}
        />
      </div>
      <div className={styles.contentContainer}>
        {currentContent === ContentState.KOKYBE && (
          <p>
            Virš 30 metų patirties užtikrina aukščiausią kokybės standartą. Mūsų
            profesionalai padės jums įgyvendinti savo projektą!
          </p>
        )}
        {currentContent === ContentState.GREITS && (
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex nam
            similique expedita deserunt tenetur eligendi neque exercitationem,
            doloremque facilis optio possimus culpa distinctio molestiae itaque,
            et autem eius cum recusandae.
          </p>
        )}
        {currentContent === ContentState.KAINA && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            earum. Perspiciatis illum minima rerum dolorem tenetur nihil
            aliquam, pariatur ea, cum corporis, inventore quae molestias
            officiis nobis totam corrupti dolore.
          </p>
        )}
      </div>
    </section>
  );
};

export default AboutSection;
