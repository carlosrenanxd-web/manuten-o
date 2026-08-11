import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";
import ContactDrawer from "../components/ContactDrawer";
import { ContactDrawerProvider } from "../context/ContactDrawerContext";

export default function MainLayout() {
    return (
        <ContactDrawerProvider>
            <div className="font-body bg-paper min-h-screen flex flex-col">
                <Header />

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