import ClassNames from "embla-carousel-class-names";
import React from "react";

interface HeaderProps {
  title: string;
}

// TODO: style contact div and add it to the header

const contactStyle = {
  backgroundColor: "grey",
  display: "flex",
  flex: "auto",
  gap: "1px",
  padding: "1px",
  margin: "1px",
  justifyContent: "space-around",
  border: "1px solid",
};

const badgeStyle = {
  backgroundColor: "lightOrange",
  size: "16px",
};

const links = [
  /*{ name: "Projetos", href: "#" },*/
  {
    name: "Faça o seu orçamento",
    href: "https://api.whatsapp.com/send/?phone=5548996954614&text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0",
    class: "btn transition-all duration-300 hover:scale-110",
  },
];
const stats = [
  { name: "De economia na sua conta de luz", value: "Até 90%" },
  { name: "Obras concluídas", value: "400+" },
  { name: "Anos de garantia", value: "25" },
  { name: "O seu investimento retorna", value: "Entre 3 a 5 anos" },
  { name: "de valorização no seu imóvel", value: "Até 30%" },
];

export function Header(props: HeaderProps) {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=3258&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="opacity-70 absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Deixe o sol pagar a sua conta de energia.
          </h2>
          <p className="mt-6 text-lg leading-8 font-semibold text-gray-100">
            A empresa de energia solar mais bem avaliada da região de Grande
            Florianópolis. Um investimento que valoriza até 30% do seu imóvel,
            com pagamento facilitado e garantia de 25 anos.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
