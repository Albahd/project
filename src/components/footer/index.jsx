
import Row from "react-bootstrap/Row"
import { ThemingContext } from "../../shared/theming/theming-selector/theming.context";
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { IdiomContext } from "../../context/createcontext";




function Footer() {
    const [lng, updateLng] = useContext(IdiomContext)
    const [t, i18n] = useTranslation("global");

    const [theming, updateTheming, changeTheme] = useContext(ThemingContext);


    return (

        <Row>

            <footer color={theming.warning} className="f-footer">
           {t("Footer.f1")}
            </footer>

        </Row>

    )


}

export default Footer