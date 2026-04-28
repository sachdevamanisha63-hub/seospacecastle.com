"use client";

import Link from "next/link";
import { FaTimes } from "react-icons/fa";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function MobileMenu({
    isOpen,
    onClose,
}: MobileMenuProps) {
    return (
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
            <button className="mobile-close" onClick={onClose}>
                <FaTimes />
            </button>

            <nav className="mobile-nav">
                <Link href="/" onClick={onClose}>Home</Link>
                <Link href="/services" onClick={onClose}>Services</Link>
                <Link href="/blogs" onClick={onClose}>Blogs</Link>
                <Link href="/about" onClick={onClose}>About</Link>
                <Link href="/career" onClick={onClose}>Career</Link>
                <Link href="/faq" onClick={onClose}>FAQs</Link>
                <Link href="/contact" onClick={onClose}>Contact</Link>
            </nav>
        </div>
    );
}