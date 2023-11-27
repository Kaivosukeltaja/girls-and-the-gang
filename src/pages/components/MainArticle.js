import React from "react";
import { articleDiv, mainText } from "./MainArticle.module.css";

const MainArticle = () => (
  <div className={articleDiv}>
    <h1>Girls and the Gang</h1>

    <p className={mainText}>
      Tervetuloa The Girls and the Gangin vauhdikkaaseen maailmaan! Meiltä
      löytyy se oikea mauste jokaiseen tilaisuuteen – olemme kuin musiikillinen
      taikajuoma, joka saa porukan nostamaan jalat ilmaan. Dynaaminen
      kokoonpanomme ja tarttuvat rytmit takaavat, että bileet ovat taattua
      laatua. Olipa kyseessä sitten hittibiisit tai klassikot, monipuolinen
      ohjelmistomme saa kaikki tarttumaan tahtiin. Tule mukaan musiikilliseen
      seikkailuun, joka tekee jokaisesta tapahtumasta unohtumattoman!
    </p>
  </div>
);

export default MainArticle;
