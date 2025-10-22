"use client";

import { useEffect, useState } from "react";

interface ClientLottieProps {
  options: any;
  height: number;
  width: number;
}

const ClientLottie = ({ options, height, width }: ClientLottieProps) => {
  const [isClient, setIsClient] = useState(false);
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    setIsClient(true);
    // Dynamically import react-lottie only on the client side
    import("react-lottie").then((module) => {
      setLottie(() => module.default);
    });
  }, []);

  if (!isClient || !Lottie) {
    return null; // or a loading placeholder
  }

  return <Lottie options={options} height={height} width={width} />;
};

export default ClientLottie;
