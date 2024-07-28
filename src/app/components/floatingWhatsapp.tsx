import whatsappLogo from "..public/whatsappLogo.png";

// TODO: FIGURE THE SCROLL OUT AND KNOW HOW TO SCROLL AND KEEP THE BUTTON IN THE SAME POSITION

export const FloatingWhatsapp = () => {
  return (
    <button>
      <a className="flex absolute bottom-0 z-1 right-0 h-16 w-16">
        <img src="whatsappLogo.png" alt="" />
      </a>
    </button>
  );
};
