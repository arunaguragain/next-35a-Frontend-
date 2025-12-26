export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section>
            My Logo
            {children}
            footer @2025
        </section>
    );
}