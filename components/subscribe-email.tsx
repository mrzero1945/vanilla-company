import Image from "next/image";
import EmailIcon from "../resources/email-icon.png"
const EmailSubcribe = () => {
    return (
      <div className="bg-[rgb(84,150,136)] text-[rgb(255,255,255)] py-1 text-center ">
        <h2 className="text-2xl font-bold my-4">Join the Vanilla Revolution Today!</h2>
    
        <form className="flex justify-center items-center mb-8">
              <Image
        src={EmailIcon.src}
        alt="email"
        width={60}
        height={60}
        className="w-12 h-10 mx-2"
        />
          <input
            type="email"
            placeholder="Email"
            className="p-2 rounded-l-md outline-none text-gray-700 w-40"
          />
          <button
            type="submit"
            className="bg-[rgb(244,234,197)] text-[rgb(84,150,136)] px-4 py-2 rounded-r-md font-semibold "
          >
            Subscribe
          </button>
        </form>
      </div>
    );
  }

export {EmailSubcribe};
