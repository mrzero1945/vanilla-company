import Image from "next/image";
import EmailIcon from "../resources/email-icon.png"
const EmailSubcribe = () => {
    return (
      <div className="bg-[rgb(84,150,136)] text-[rgb(244,234,197)] py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Vanilla Revolution Today!</h2>
    
        <form className="flex justify-center items-center mb-8">
              <Image
        src={EmailIcon.src}
        alt="email"
        width={60}
        height={60}
        className="me-5"
        />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-md outline-none text-gray-700"
          />
          <button
            type="submit"
            className="bg-[rgb(244,234,197)] text-[rgb(84,150,136)] px-4 py-2 rounded-r-md font-semibold"
          >
            Subscribe
          </button>
        </form>
        <div className="flex justify-center gap-10 mx-4 md:text-xl text-md">
          <div>
            <p className="font-bold text-3xl">100%</p>
            <p>Pure Quality</p>
          </div>
          <div>
            <p className="font-bold text-3xl">50+</p>
            <p>Global Partners</p>
          </div>
          <div>
            <p className="font-bold text-3xl">10,000+</p>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    );
  }

export {EmailSubcribe};
