import React from "react";

const date = new Date();
const currentYear = date.getFullYear();
export function Footer(){
    return (
        <footer>
            <p>Copyright @{currentYear}</p>
        </footer>
    );
}