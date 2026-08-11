import { Outlet } from "react-router-dom";
import HeaderLayout from "../components/HeaderLayout";
import Footer from "../components/Footer";
import { ContactDrawerProvider } from "../context/ContactDrawerContext";
import FloatingContact from "../components/FloatingContact";
import ContactDrawer from "../components/ContactDrawer";

export default function LayoutPages() {
    return (
        <ContactDrawerProvider>
            <div className="font-body bg-paper min-h-screen flex flex-col">
                <HeaderLayout />

                <main className="flex-1">
                    <Outlet />
                </main>

                <Footer />
                <FloatingContact />
                <ContactDrawer />
            </div>
        </ContactDrawerProvider>
    );
}