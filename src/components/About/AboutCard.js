import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            👋 Hi Everyone! I'm <span className="purple">Cyrus Shrestha </span>{" "}
            from <span className="purple"> from Lalitpur, Nepal</span>
            <br />
            <br />
            I’m currently working as an Associate Software Engineer 💻 at
            InnovateTech, where I get to unleash my passion for coding every
            day! With a BSc (Hons) in Computing 🎓 from Islington College,
            affiliated with London Metropolitan University 🏫, I’ve gained a
            solid foundation in software development.
            <br />
            <br />
            I’m all about creating innovative solutions and exploring the
            ever-evolving world of technology. When I’m not immersed in code,
            you can find me enjoying some of my favorite activities:
          </p>
          <ul>
            <li className="about-activity">
              🎮 Playing Games – I love diving into new worlds and challenges!
            </li>
            <br />
            <li className="about-activity">
              🌍 Traveling & Trekking 🏞️ – There’s nothing quite like exploring
              the great outdoors and discovering new places.
            </li>
            <br />
            <li className="about-activity">
              📚 Reading – I enjoy diving into books, especially those that
              expand my knowledge in tech and beyond.
            </li>
            <br />
            <li className="about-activity">
              🎶 Listening to Music – Whether it’s a calming playlist or upbeat
              tracks, music fuels my creativity!
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            Let’s connect and build something amazing together! 🚀✨{" "}
          </p>
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
