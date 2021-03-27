import React from "react";

const Footer = () => {
    return(
        <div className="footer">
            <p>
                &copy; {new Date().getFullYear()} Company Name - All Rights Reserved
            </p>
            <div className="contacts">
                Contacts:<br /> phone number<br /> @info.companyname.com
            </div>
        </div>
    );
}

export default Footer;