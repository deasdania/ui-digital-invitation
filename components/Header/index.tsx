import { useRouter } from "next/router";
import { createRef, useEffect, useRef, useState } from "react";

function Index() {
  const indicator: any = useRef();
  const home: any = createRef();
  const about: any = createRef();
  const types: any = createRef();
  const login: any = createRef();
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
    if (p === "/#" || p === "/#beranda" || p === "/") {
      indicators(home.current);
    } else if (p === "/#tentang-kami") {
      indicators(about.current);
    } else if (p === "/#jenis-undangan") {
      indicators(types.current);
    } else if (p === "/masuk") {
      indicators(login.current);
    }
  };
  const indicators = (e) => {
    indicator.current.style.left = e.offsetLeft + "px";
    indicator.current.style.width = e.offsetWidth + "px";
  };
  return (
    <header>
      <a href="#beranda" onClick={() => setPath("/#beranda")} className="logo">
        LOGO
      </a>
      <div className="nav">
        <ul>
          <li ref={home} className="list active">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#beranda")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#beranda"
            >
              Beranda
            </a>
          </li>
          <li ref={about} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#tentang-kami")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#tentang-kami"
            >
              Tentang Kami
            </a>
          </li>
          <li ref={types} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/#jenis-undangan")}
              onMouseEnter={(e) => indicators(e.target)}
              href="#jenis-undangan"
            >
              Jenis Undangan
            </a>
          </li>
          <li ref={login} className="list">
            <a
              onMouseLeave={() => checkIndicartor(path)}
              onClick={() => setPath("/masuk")}
              onMouseEnter={(e) => indicators(e.target)}
              href="masuk"
            >
              Masuk
            </a>
          </li>
        </ul>
        <div ref={indicator} id="indicator"></div>
      </div>
    </header>
  );
}

export default Index;
