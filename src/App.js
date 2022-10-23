/* eslint-disable jsx-a11y/anchor-is-valid */
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
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
        name: "Investigation into developers' backgrounds",
        url: "https://background.zuri.team/",
      },
      {
        name: "Book Dsesigns",
        url: "https://books.zuri.team/design-rules",
      },
    ],
  };

  return (
    <div className="p-m-4 mt-8">
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

      <div className="p-d-flex p-jc-center p-ai-centre p-flex-column p-flex-md-row">
        <div className="p-d-flex p-flex-column">
          {data.links.map((link) => (
            <Button
              className="p-m-2 p-button-lg p-button-text p-jc-center p-mb-2 p-mr-2"
              style={{ backgroundColor: "GrayText" }}
            >
              <a href={link.url} target="_blank" rel="noreferrer">
                {link.name}
              </a>
            </Button>
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
      <div class="p-d-flex p-jc-between  p-flex-column p-flex-md-row">
        <div className="p-mb-2 p-mr-2">
          <Image src={data.zuri__img} />
        </div>
        <div className="p-mb-2 p-mr-2">{data.hng}</div>
        <div className="p-mb-2 p-mr-2">
          <Image src={data.i4g__img} />
        </div>
      </div>
    </div>
  );
}

export default App;
