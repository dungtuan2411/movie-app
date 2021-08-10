import React from "react";
import Header from "../../components/header/Header";

function TemplateClient({ Component }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                <Component />
            </main>
            {/* <footer>Footer</footer> */}
        </div>
    );
}

export default TemplateClient;
