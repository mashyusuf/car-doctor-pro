import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AuthProvider from "@/services/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Car Doctor Pro",
    template: "%s | Car Doctor",
  },
  description: "Car Reaper Workshop",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="carDoctorTheme">
      <body className={inter.className}>
      <ToastContainer/>
      <AuthProvider>
        <Navbar/>
        {children}
        <div className="fixed w-full">
        <Footer/>
        </div>
        </AuthProvider>
        </body>
      
    </html>
  );
}
