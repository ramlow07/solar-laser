import { Roboto_Flex } from "next/font/google";
import { Button } from "@/components/ui/button";
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

// TODO: style contact div and add it to the header
// TODO: INSTALL SHADCN

const contactStyle = {};

export function Header(props: HeaderProps) {
  return (
    <header>
      <div className="div" style={headerStyle}>
        <Button className="home">Início</Button>
        <Button className="about">Quem somos nós ?</Button>
        <Button className="contact">Contato</Button>
        <Button className="projects">Projetos</Button>
      </div>
    </header>
  );
}
