import { Poppins, Lexend_Deca } from "next/font/google";

// export const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
});

export const lexendDeca = Lexend_Deca({
  subsets: ["latin"],
  variable: "--font-lexend"
});
