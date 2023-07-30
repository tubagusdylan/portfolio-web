import { Button } from "../components/Button";
import ilustrasi from "../img/ilustrasi.png";
import gambar from "../img/image.png";

export const Home = () => {
  return (
    <section className="pt-36">
      <div className="container xl:px-36">
        <div className="flex flex-wrap border border-red-500 justify-center items-center">
          <div className="w-full lg:w-1/2">
            <span>Welcome!, i am</span>
            <h1>Tubagus Dylan</h1>
            <span>IoT & Web Development Enthusiast</span>
            <p>I am a final year Electrical Engineering Student at University of Indonesia. In the last few months, I have more interest in IoT (Internet of Things) which have a strong relationship with web development. </p>
            <Button>Contact Me</Button>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={ilustrasi} alt="gambar" width={500} className="lg:hidden" />
            <img src={gambar} alt="gambar" width={300} className="hidden lg:block mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};
