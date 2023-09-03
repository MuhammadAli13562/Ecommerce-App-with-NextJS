export default function Footer() {
  return (
    <div className="w-full  p-2 h-80 mt-16 border-2 border-black border-solid">
      <div className="w-full flex justify-center">
        <div className="w-1/5">
          <div className="flex flex-col">
            <h1>Contact Us</h1>
            <span>Email : example@example</span>
            <span>Phone : 0xxx3xxx5xxx7</span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex flex-col">
            <span>Home</span>
            <span>Trousers</span>
            <span>T-Shirts</span>
            <span>Shorts</span>
            <span>Woman Tees</span>
            <span>Woman Trousers</span>
            <span>Hoodies & Sweatshirts</span>
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex flex-col">
            <span>Search</span>
            <span>Exchange & Return Policy</span>
            <span>Privacy Policy</span>
            <span>Shipping Policy</span>
            <span>Terms of Service</span>
            <span>About Us</span>
          </div>
        </div>
        <div className="w-1/5">
          <div className="flex flex-col">
            <h1>Signup and Save</h1>
            <p>
              Subscribe to get special offers , free giveaways &
              once-in-a-lifetime deals
            </p>
            <input type="text" placeholder="Enter your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
