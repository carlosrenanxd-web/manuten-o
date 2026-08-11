import { createContext, useContext, useState } from "react";

const ContactDrawerContext = createContext(null);

export function ContactDrawerProvider({ children }) {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    return (
        <ContactDrawerContext.Provider value={{ open, openDrawer, closeDrawer }}>
            {children}
        </ContactDrawerContext.Provider>
    );
}

export function useContactDrawer() {
    const ctx = useContext(ContactDrawerContext);
    if (!ctx) {
        throw new Error("useContactDrawer precisa ser usado dentro de <ContactDrawerProvider>");
    }
    return ctx;
}