import sobre_img from "../../assets/sobre.png";
import classes from "./sobreContent.module.css";

const SobreContent = () => {
  return (
    <section className={classes.sobreWrapper}>
      <div className={classes.mainContent}>
        <img src={sobre_img} alt="Casa em meio a natureza" />
        <div>
          <h1>Lorem Ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad
            litora torquent per chonubia nostra, per
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
            lacus enim. Donec a lacus diam. Class aptent taciti sociosqu ad
            litora torquent per chonubia nostra, per
          </p>
        </div>
      </div>
      <div className={classes.content}>
        <h2>Lorem Ipsum Dolor si Amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          quam lacus. Quisque sit amet consectetur urna, at aliquet arcu. Nunc
          tristique eget magna vel eleifend. Quisque pellentesque fringilla urna
          at blandit. Nunc consequat vulputate dui, vitae pretium lorem. Vivamus
          lobortis consectetur est, sed sodales velit suscipit vitae. v
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          quam lacus. Quisque sit amet consectetur urna, at aliquet arcu. Nunc
          tristique eget magna vel eleifend. Quisque pellentesque fringilla urna
          at blandit. Nunc consequat vulputate dui, vitae pretium lorem. Vivamus
          lobortis consectetur est, sed sodales velit suscipit vitae. v
        </p>
      </div>
      <div className={classes.content}>
        <h2>Lorem Ipsum Dolor si Amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          quam lacus. Quisque sit amet consectetur urna, at aliquet arcu. Nunc
          tristique eget magna vel eleifend. Quisque pellentesque fringilla urna
          at blandit. Nunc consequat vulputate dui, vitae pretium lorem. Vivamus
          lobortis consectetur est, sed sodales velit suscipit vitae. v
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a
          quam lacus. Quisque sit amet consectetur urna, at aliquet arcu. Nunc
          tristique eget magna vel eleifend. Quisque pellentesque fringilla urna
          at blandit. Nunc consequat vulputate dui, vitae pretium lorem. Vivamus
          lobortis consectetur est, sed sodales velit suscipit vitae. v
        </p>
      </div>
      <div className={classes.quote}>
        <a href="/">Lorem Ipsum Dolor si Amet</a>
      </div>
    </section>
  );
};

export default SobreContent;
