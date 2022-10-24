/* eslint-disable jsx-a11y/anchor-is-valid */
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import styled from "styled-components";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Image } from "primereact/image";

import { BlockUI } from "primereact/blockui";

function App() {
  const data = {
    twitter: "IbraheemUthman_",
    profile__img: "https://github.com/Ib-uth.png",
    zuri__img: "https://i.ibb.co/9pXcLQT/zuri.png",
    i4g__img: "https://i.ibb.co/kyMCS2Y/I4-G-Logo-Color-Cropped.png",
    hng: "HNG Internship 9 Frontend Task",
    slack: "IbraheemUthmaan",
    github: "https://github.com/Ib-uth",
    // eslint-disable-next-line no-sparse-arrays
    links: [
      {
        name: "Zuri Team",
        url: "https://training.zuri.team/",
      },
      {
        name: "Zuri Books",
        url: "http://books.zuri.team/",
      },
      {
        name: "Python Book",
        url: "https://books.zuri.team/python-for-beginners?ref_id=IbraheemUthmaan",
      },
      ,
      {
        name: "Investigation Into Developers' Backgrounds",
        url: "https://background.zuri.team/",
      },
      {
        name: "Book Dsesigns",
        url: "https://books.zuri.team/design-rules",
      },
    ],
  };

  const CardWrapper = styled.div`
    padding-top: 3rem;
    @media (min-width: 768px) {
      padding-top: 2rem;
    }
    @media (min-width: 425px) {
      padding-top: 1rem;
    }
  `;
  const Links = styled.div`
    @media (max-width: 768px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }
    @media (max-width: 425px) {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  `;
  const Container = styled.div`
    text-align: center;
  `;
  const Buttons = styled.a`
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 35rem;
    color: Black;
    text-decoration: none;
    @media (max-width: 768px) {
      width: 25rem;
    }
    @media (max-width: 425px) {
      width: 14rem;
    }
  `;
  const Footer = styled.div`
    @media (max-width: 768px) {
      text-align: center;
    }
  `;
  const FooterItem = styled.div`
    @media (max-width: 768px) {
      padding: 1rem;
    }
  `;
  return (
    <CardWrapper>
      <div className="p-m-4 mt-8">
        <Container>
          <div className="p-d-flex p-jc-center p-ai-centre p-flex-column p-flex-md-row">
            <BlockUI>
              <Avatar
                className="p-jc-right"
                image={data.profile__img}
                size="xlarge"
                shape="circle"
              />
              <h3 className="p-m-2 mb-3">{data.twitter}</h3>
              <h3 className="p-m-2 mb-3" style={{ display: "none" }}>
                {data.slack}
              </h3>
            </BlockUI>
          </div>
        </Container>

        <div className="p-d-flex p-jc-center p-ai-centre p-flex-column p-flex-md-row">
          <div className="p-d-flex p-flex-column">
            {data.links.map((link) => (
              <Links>
                <Buttons
                  className="p-m-2 p-button-lg p-button-text p-jc-center p-mb-2 p-mr-2"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  style={{ backgroundColor: "GrayText" }}
                >
                  {link.name}
                </Buttons>
              </Links>
            ))}
          </div>
        </div>
        <div className="p-d-flex p-jc-center p-ai-centre p-m-4">
          <Button className="p-m-2 p-button-text">
            <a href={data.slack} target="_blank" rel="noreferrer">
              <i className="pi pi-slack" style={{ fontSize: "2em" }}></i>
            </a>
          </Button>
          <Button className="p-m-2 p-button-text">
            <a href={data.github} target="_blank" rel="noreferrer">
              <i className="pi pi-github" style={{ fontSize: "2em" }}></i>
            </a>
          </Button>
        </div>
        <Divider />
        <Footer>
          <div class="p-d-flex p-jc-between  p-flex-column p-flex-md-row">
            <FooterItem>
              <div className="p-mb-2 p-mr-2">
                <Image src={data.zuri__img} />
              </div>
            </FooterItem>
            <FooterItem>
              <div className="p-mb-2 p-mr-2">{data.hng}</div>
            </FooterItem>
            <FooterItem>
              <div className="p-mb-2 p-mr-2">
                <Image src={data.i4g__img} />
              </div>
            </FooterItem>
          </div>
        </Footer>
      </div>
    </CardWrapper>
  );
}

export default App;
