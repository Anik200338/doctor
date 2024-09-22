import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import AuthProvider from "@/services/AuthProvider";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  data-theme="carDoctorTheme">
      <body
        className={inter.className}
      >
         <Suspense>
      <ToastContainer/>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
