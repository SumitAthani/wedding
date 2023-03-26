import React from "react";
import "../css/Invitation.css";
import invitation1 from "../assets/InvitatinPage1.png"
import invitation2 from "../assets/InvitatinPage2.png"

export default function InvitationCard() {
  return (
    <>
      <div className="invitationWrapper">
        <img className="invitationImage" src={invitation1} alt="Invitation Page 1" />;
        <img className= "invitationImage" src={invitation2} alt="Invitation Page 2" />;
      </div>
    </>
  );
}
