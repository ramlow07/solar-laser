import { Roboto_Flex } from "next/font/google";
import React from "react";

interface HeaderProps {
  title: string;
}

const headerStyle = {
  backgroundColor: "orange",
  display: "flex",
  flex: "auto",
  gap: "1px",
  padding: "5px",
  margin: "5px",
  justifyContent: "space-around",
  border: "1px solid",
};

export function Header(props: HeaderProps) {
  return (
    <header>
      <div className="div" style={headerStyle}>
        <button className="home">Início</button>
        <button className="about">Quem somos nós ?</button>
        <button className="contact">Contato</button>
        <button className="projects">Projetos</button>
      </div>
    </header>
  );
}
