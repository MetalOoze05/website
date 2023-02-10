import React from "react";

import BottomFade from "./BottomFade";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="py-20 px-10 md:px-20 xl:px-80 flex flex-wrap justify-center items-center">
            <main>
                {children}
            </main>
            {/* <BottomFade /> */}
        </div>
    )
}

export default Layout;