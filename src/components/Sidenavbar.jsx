import React from "react";
import "../App.css";
import { AiFillAppstore, AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { MdOutlineSpeakerNotes, MdOutlineSettings } from "react-icons/md";

export default function Sidenavbar() {
  return (
    <section>
      <div className="side-Navbar">
        <nav>
          <a href="/#">
            <AiFillAppstore style={{ color: "white" }} />
          </a>
          <br />
          <a href="/#">
            <AiOutlineTeam style={{ color: "white" }} />
          </a>
          <br />
          <a href="/#">
            <SlCalender style={{ color: "white" }} />
          </a>
          <br />
          <a href="/#">
            <HiOutlineCurrencyRupee style={{ color: "white" }} />
          </a>
          <br />
          <a href="/#">
            <MdOutlineSpeakerNotes style={{ color: "white" }} />
          </a>
          <br />
          <a href="/#">
            <MdOutlineSettings style={{ color: "white" }} />
          </a>
          <br />

          <a href="/#" className="side-nav-img">
            {/* <img src={AiOutlineUser} alt="AiOutlineUser" /> */}
            <AiOutlineUser style={{ color: "white" }} />
          </a>
          <br />
        </nav>
      </div>
    </section>
  );
}
