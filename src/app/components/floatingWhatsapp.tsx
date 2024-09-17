// TODO: FIGURE THE SCROLL OUT AND KNOW HOW TO SCROLL AND KEEP THE BUTTON IN THE SAME POSITION

export const FloatingWhatsapp = () => {
  return (
    <button>
      <a
        href="https://api.whatsapp.com/send/?phone=5548996954614&text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0"
        className="flex fixed bottom-5 z-1 right-5 h-20 w-20"
      >
        <img src="whatsapp.png" alt="" className="animate-bounce" />
      </a>
    </button>
  );
};
