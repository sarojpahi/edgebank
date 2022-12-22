import { Inter } from "@next/font/google";
import { Box } from "@chakra-ui/react";
import HeroSection from "../Components/LandingPage/HeroSection";
import BillAndRecharge from "../Components/LandingPage/BillAndRecharge";
import PaymentInstrument from "../Components/LandingPage/PaymentInstrument";
import FinancialService from "../Components/LandingPage/FinancialService";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box bg="#f5f7fa">
      <HeroSection />
      <BillAndRecharge />
      <PaymentInstrument />
      <FinancialService />
    </Box>
  );
}
