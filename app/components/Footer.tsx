export default function Footer() {
    return (
        <footer className="mt-12 border-t border-zinc-700 py-6 px-4 text-sm text-center text-zinc-400">
            <p className="mb-2">
                &copy; {new Date().getFullYear()} Kynepso. Tous droits réservés.
            </p>

            <div className="flex justify-center gap-4">
                <a href="/contact" className="hover:underline">
                    Contact
                </a>
                <a href="#" className="hover:underline">
                    Mentions légales
                </a>
                <a href="#" className="hover:underline">
                    CGU
                </a>
            </div>
        </footer>
    );
}
