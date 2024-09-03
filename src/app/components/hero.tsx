import react from "react";
import {
  CurrencyDollarIcon,
  CogIcon,
  ShieldCheckIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/20/solid";
import { text } from "stream/consumers";

const features = [
  {
    name: "Ganhar dinheiro economizando dinheiro...",
    description:
      "Parece mentira, né? Mas além de economizar até 30% na sua conta de luz, a instalação da energia solar dá ao seu imóvel uma valorização de até 20%.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Rápida instalação e baixa manutenção",
    description:
      "Além de ter uma instalação rápida, isso tambem te permite um custo de manutenção baixíssimo.",
    icon: CogIcon,
  },
  {
    name: "Garantia de 25 anos.",
    description: "Nada mais nada menos do que duas décadas e meia de garantia.",
    icon: ShieldCheckIcon,
  },
];

export default function Hero() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-gradient-to-r from-blue-800 to-blue-400">
      <div className="text-2xl mx-auto my-5 space-x-7 max-w-2xl px-20 lg:px-50 justify-between">
        <a href="https://api.whatsapp.com/send/?phone=5548996954614&text=Ol%C3%A1+gostaria+de+um+or%C3%A7amento&type=phone_number&app_absent=0">
          <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            CLIQUE AQUI E FALE COM UM ESPECIALISTA.
          </button>
        </a>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-orange-500 ">
                Credenciados pelas maiores marcas fabricantes e com garantia
                estendida.
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Excelência em Qualidade desde 2017.
              </p>
              <p className="mt-6 text-lg leading-8 text-white">
                Com mais de 6 anos de expertise no setor de energia solar, a
                SolarLaser destaca-se como referência incontestável na entrega
                de produtos e serviços de alta qualidade. A equipe da
                SolarLaser, altamente qualificada e capacitada, não apenas atua
                de maneira proficiente, mas também proporciona um atendimento
                primoroso desde o primeiro contato. Comprometidos em oferecer
                suporte e assistência inigualáveis, os profissionais da
                SolarLaser asseguram uma experiência completa e satisfatória
                para seus clientes.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-bold text-orange-500">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-orange-300"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/flagged/photo-1566838616631-f2618f74a6a2?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product screenshot"
            className="w-[48rem] max-w-592 rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={592}
            height={1368}
          />
        </div>
      </div>
    </div>
  );
}
