import React from "react";
import { articleDiv, mainText } from "./MainArticle.module.css";
import VideoClip from "./VideoClip";

const MainArticle = () => (
  <div className={articleDiv}>
    <h1>Girls and the Gang</h1>

    <p className={mainText}>

      Tervetuloa The Girls and the Gangin vauhdikkaaseen maailmaan! Meiltä 
      löytyy se oikea mauste jokaiseen tilaisuuteen – olemme kuin musiikillinen 
      taikajuoma, joka saa juhlatunnelman kattoon ammattimaisella otteella. 
      Dynaaminen kokoonpanomme ja tarttuvat rytmit takaavat, että bileet ovat 
      taattua laatua. Olipa kyseessä sitten hittibiisit tai klassikot, monipuolinen 
      ohjelmistomme takaa unohtumattoman musiikillisen seikkailun, joka tekee jokaisesta 
      tilaisuudesta ainutlaatuisen!
      Ohjelmistostamme löytyy niin kotimaisia kuin kansainvälisiäkin pop-, rock- ja discohittejä aina menneiltä vuosikymmeniltä tähän päivään saakka. 
      Ohjelmistossamme on kappaleita suomen ja englannin kielen lisäksi myös ranskan, portugalin, Italian, espanjan ja ruotsin kielellä. Saattaapa keikoillamme kuulla myös sellon sielukasta ääntä.
      Suunnittelemme esitettävän ohjelmiston jokaiseen tilaisuuteen sopivaksi tilaajan toiveet huomioiden. Ota yhteyttä, niin kerromme lisää!
    </p>
    <VideoClip />
  </div>
);

export default MainArticle;
