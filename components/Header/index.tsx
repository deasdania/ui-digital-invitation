import { useRouter } from "next/router";
import { createRef, useEffect, useRef, useState } from "react";

function Index() {
  const indicator: any = useRef();
  const home: any = createRef();
  const about: any = createRef();
  const portfolio: any = createRef();
  const product: any = createRef();
  const contact: any = createRef();
  const [path, setPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setPath(router.asPath);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      checkIndicartor(path);
      console.log(router.asPath);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [path]);
  const checkIndicartor = (p) => {
    if (p === "/#" || p === "/#home" || p === "/") {
      indicators(home.current);
    } else if (p === "/#about") {
      indicators(about.current);
    } else if (p === "/#portfolio") {
      indicators(portfolio.current);
    } else if (p === "/#product") {
      indicators(product.current);
    } else if (p === "/#contact") {
      indicators(contact.current);
    }
  };
  const indicators = (e) => {
    indicator.current.style.left = e.offsetLeft + "px";
    indicator.current.style.width = e.offsetWidth + "px";
  };
  return (
    <header>
      <a href="#home" className="logo">
        LOGO
      </a>
      <div className="nav">
        <ul>
          <li ref={home} className="list active">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#home")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#home"
            >
              Home
            </a>
          </li>
          <li ref={about} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#about")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#about"
            >
              About
            </a>
          </li>
          <li ref={portfolio} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#portfolio")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#portfolio"
            >
              Portfolio
            </a>
          </li>
          <li ref={product} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#product")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#product"
            >
              Product
            </a>
          </li>
          <li ref={contact} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#contact")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div ref={indicator} id="indicator"></div>
      </div>
    </header>
  );
}

export default Index;
