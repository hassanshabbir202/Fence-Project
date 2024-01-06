import React from 'react'


const HelpCenter = () => {
  return (
    <div>
      <div className="helpcentercontainer">
        <div className="helpcenter">
          <div className="helpcenterbox">
            <div className="flexone">
              {/* <HelpOutlineIcon sx={{ fontSize: "40px" }} id="hideIcons"/> */}
              <p className="firstpara">Help Center</p>
            </div>
            <div className="flextwo">
              {/* <MailOutlineIcon sx={{ fontSize: "40px" }}id="hideIcons" /> */}
              <p >Sign up & Save BIG</p>
            </div>
            <div className="flexthree">
              {/* <PeopleIcon sx={{ fontSize: "40px" }} id="hideIcons"/> */}
              <p >Careers</p>
            </div>
            <div className="flexfour">
              {/* <AndroidIcon sx={{ fontSize: "40px" }} id="hideIcons"/> */}
              {/* <AppleIcon sx={{ fontSize: "40px" }} id="hideIcons"/> */}
              <p >Use our App!</p>
            </div>
            <div className="flexfive">
              {/* <HandshakeIcon sx={{ fontSize: "40px" }} id="hideIcons"/> */}
              <p > Sell to Us!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="affiliate-website-container">
        <div className="affilliatewebsite">
          <div className="firstaffiliatebox">
            <p>
              <b className="boldHeadings">Affiliated Websites</b>
            </p>
            <p className="info">Midwest Manufacturing</p>
            <p className="info">Real Estate</p>
            <p className="info">Nail Plant</p>
            <p className="info">Menards® Transportation</p>
            <p className="info">Menards® Self Storage</p>
          </div>
          <div className="secondaffiliatebox">
            <p>
              <b className="boldHeadings">Business Opportunities</b>
            </p>
            <p className="info">Contractor Hauling</p>
            <p className="info">Suppliers & Service Providers</p>
          </div>
          <div className="thirdaffiliatebox">
            <p>
              <b className="boldHeadings">Company Information</b>
            </p>
            <p className="info">About Us</p>
            <p className="info">Menards Credit Programs</p>
            <p className="info">Site Map</p>
          </div>
        </div>
      </div>

      <div className="icons-cotainer">
        <div className="iconsbox">
          {/* <FacebookSharpIcon sx={{ fontSize: "35px" }} />
          <TwitterIcon sx={{ fontSize: "35px" }} />
          <InstagramIcon sx={{ fontSize: "35px" }} />
          <PinterestIcon sx={{ fontSize: "35px" }} />
          <YouTubeIcon sx={{ fontSize: "35px" }} /> */}
        </div>
      </div>

      <div className="flinks-container">
        <div className="f-links">
          <a href="#">About</a>
          <a href="#">Site Map</a>
          <a href="#">Accessibility Statement</a>
          <a href="#">Privacy Statement</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>

      <div className="second-flinks-container">
        <div className="second-f-links">
          <a href="#">
            California Transparency in Supply Chains Act Disclosure
          </a>
          <a href="#">California Privacy Rights</a>
          <a href="#">Your Privacy Choices</a>
          <a href="#">©2004-2023 Menard, Inc. All Rights Reserved.</a>
        </div>
      </div>

      <div className="footerlogo">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
          alt=""
        />
      </div>
    </div>
  )
}

export default HelpCenter