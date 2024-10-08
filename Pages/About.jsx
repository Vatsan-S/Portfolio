import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

const About = () => {
  return (
    <div className="aboutContainer">
      <Navbar />
      <div className="aboutBanner">
        <div className="aboutBannerContent">
          <h2 className="aboutTitle">Vatsan</h2>
          <p className="aboutDescription">
            UI UX Designer & Developer{" "}
            <span>
              <svg
                width="52"
                height="13"
                viewBox="0 0 52 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6.15789"
                  cy="6.15789"
                  r="6.15789"
                  transform="matrix(-1 0 0 1 52 0)"
                  fill="#47E674"
                />
                <circle
                  cx="6.15789"
                  cy="6.15789"
                  r="6.15789"
                  transform="matrix(-1 0 0 1 32.1577 0)"
                  fill="#47E674"
                />
                <circle
                  cx="6.15789"
                  cy="6.15789"
                  r="6.15789"
                  transform="matrix(-1 0 0 1 12.3159 0)"
                  fill="#47E674"
                />
              </svg>
            </span>
          </p>
          <div className="aboutImages">
            <img
              src="https://res.cloudinary.com/ddycjnke1/Img1_roqrie"
              alt="Image of vatsan 1"
            />
            <img
              src="https://res.cloudinary.com/ddycjnke1/img2_tcgb0k"
              alt="Image of vatsan 2"
            />
            <img
              src="https://res.cloudinary.com/ddycjnke1/img3_grpc0a"
              alt="Image of vatsan 3"
            />
          </div>
        </div>
      </div>

      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Aspiration</h3>
        <p className="contentInProjectPage">
          I approach life and my career with a blend of curiosity and
          dedication. I believe in the importance of continuous learning and
          growth, embracing challenges as opportunities to enhance my skills. My
          background in design has given me a unique perspective, and I see
          coding as a powerful way to interact with technology. I strive to
          create impactful solutions through collaboration and innovation. My
          aspiration is to contribute meaningfully to a skilled team while
          continually evolving in my professional journey.
        </p>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Skill Development & Projects</h3>
        <div className="contentInProjectPage experience">
          <div className="timeLineSection">
            <p className="timeline">Mar 2024</p>
            <p className="timeline">to</p>
            <p className="timeline">Jul 2024</p>
          </div>
          <div className="workDetailsSection">
            <h4 className="titleInProjectPage role">
              Guvi - Fullstack web developement
            </h4>
            <p className="expPara">
              Guvi - EdTech Company incubated by IIT-M & IIM-A
            </p>
            <br />
            <h4 className="titleInProjectPage role">Skills</h4>
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText"> Proficient in React:</span>
                Strong grasp of components, hooks, and global state management
                with redux.
              </li>
              <li className="expPara">
                <span className="boldText"> Async Operations:</span>
                Focused on managing async operations with Promises and
                async/await.
              </li>
              <li className="expPara">
                <span className="boldText"> Clean UI Development:</span>
                Skilled in coding visually appealing and intuitive interfaces.
              </li>
              <li className="expPara">
                <span className="boldText"> Backend:</span>
                Clean Routes and proper models to handle requests
              </li>
              <li className="expPara">
                <span className="boldText"> Database:</span>
                Knowledge in MongoDB and learning Postgre
              </li>
            </ul>

            <br />
            <br />
            <h4 className="titleInProjectPage role">Projects</h4>
            <br />
            <br />
            <h4 className="titleInProjectPage role">
              1. Task Management Web app for teams alike Trello
            </h4>
            <br />
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText"> Multi-User Support: </span>
                Role-based authentication for three distinct roles: admin, team
                lead, and team member.
              </li>
              <li className="expPara">
                <span className="boldText"> Dynamic UI: </span>
                Tailored user interfaces with functionalities that adapt based
                on user roles.
              </li>
              <li className="expPara">
                <span className="boldText"> Real-Time Data Rendering: </span>
                Utilizes React for responsive interfaces and Redux for efficient
                state management.
              </li>
              <li className="expPara">
                <span className="boldText"> Robust Backend: </span>
                Developed with Node.js and Express, with MongoDB for scalable
                data storage. Scalable Architecture: Built to accommodate future
                growth and enhanced features.
              </li>
            </ul>

            <br />
            <br />
            <h4 className="titleInProjectPage role">
              2. Connecting Artists with Clients Through a Seamless Booking and
              Communication Platform.
            </h4>
            <br />
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText"> Artist Connection Platform: </span>
                Facilitates collaboration between artists and clients.
              </li>
              <li className="expPara">
                <span className="boldText"> Real-Time Communication: </span>
                Integrated chat system for instant interactions with socket.io
              </li>
              <li className="expPara">
                <span className="boldText"> Appointment Booking: </span>
                Seamless scheduling for client-artist interactions.
              </li>
              <li className="expPara">
                <span className="boldText"> Dynamic UI: </span>
                Responsive design tailored for user engagement.
              </li>
              <li className="expPara">
                <span className="boldText"> Robust Backend: </span>
                Developed with Node.js and Express, using MongoDB for data
                management
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="technologiesContainer productPageLayout">
        <h3 className="titleInProjectPage">Technologies known...</h3>
        <div className="contentInProjectPage techContent">
          <div className="individualTech" title="Javascript">
            <div className="techImage">
              <svg
                viewBox="0 0 2500 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1654_346)">
                  <path d="M0 0H2500V2500H0V0Z" fill="#F0DB4F" />
                  <path
                    d="M2295.39 1903.75C2277.09 1789.69 2202.71 1693.92 1982.41 1604.56C1905.89 1569.39 1820.58 1544.2 1795.15 1486.22C1786.12 1452.47 1784.93 1433.46 1790.64 1413.02C1807.03 1346.72 1886.17 1326.05 1948.91 1345.06C1989.31 1358.6 2027.57 1389.74 2050.62 1439.4C2158.51 1369.54 2158.27 1370.01 2233.6 1322.01C2206.04 1279.23 2191.3 1259.51 2173.24 1241.21C2108.37 1168.73 2019.96 1131.42 1878.56 1134.27C1854.09 1137.36 1829.38 1140.68 1804.9 1143.78C1734.32 1161.6 1667.06 1198.67 1627.61 1248.34C1509.27 1382.61 1543.01 1617.63 1687.03 1714.36C1828.9 1820.82 2037.31 1845.06 2063.93 1944.63C2089.83 2066.54 1974.34 2105.99 1859.55 2091.97C1774.95 2074.38 1727.9 2031.37 1677.04 1953.19C1583.42 2007.37 1583.42 2007.37 1487.17 2062.74C1509.98 2112.64 1533.98 2135.22 1572.25 2178.47C1753.33 2362.17 2206.51 2353.14 2287.79 2075.1C2291.11 2065.59 2312.98 2001.9 2295.39 1903.75ZM1359.08 1149H1125.24C1125.24 1351 1124.29 1551.57 1124.29 1753.56C1124.29 1882.13 1130.94 2000 1110.03 2036.12C1075.81 2107.17 987.17 2098.38 946.771 2084.6C905.659 2064.4 884.746 2035.64 860.506 1995.01C853.852 1983.36 848.862 1974.33 847.196 1973.62C783.748 2012.36 720.533 2051.33 657.082 2090.07C688.691 2154.94 735.266 2211.26 794.915 2247.86C884.031 2301.33 1003.8 2317.73 1129.04 2288.97C1210.55 2265.21 1280.89 2216.02 1317.73 2141.16C1370.96 2043.01 1359.55 1924.19 1359.08 1792.78C1360.27 1578.42 1359.08 1364.07 1359.08 1149Z"
                    fill="#323330"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1654_346">
                    <rect width="2500" height="2500" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">Javascript</p>
          </div>
          <div className="individualTech" title="React">
            <div className="techImage">
              <svg
                viewBox="0 0 2194 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2194 1250.22C2194 1104.88 2011.99 967.141 1732.93 881.725C1797.33 597.301 1768.71 371.014 1642.59 298.566C1613.52 281.572 1579.54 273.522 1542.42 273.522V373.25C1562.99 373.25 1579.54 377.275 1593.4 384.877C1654.22 419.759 1680.61 552.58 1660.03 723.413C1655.12 765.451 1647.07 809.724 1637.23 854.892C1549.57 833.426 1453.87 816.88 1353.25 806.147C1292.88 723.413 1230.27 648.282 1167.21 582.543C1313 447.039 1449.85 372.802 1542.87 372.802V273.075C1419.88 273.075 1258.89 360.728 1096.11 512.778C933.322 361.622 772.327 274.864 649.345 274.864V374.591C741.917 374.591 879.21 448.381 1025 582.99C962.391 648.73 899.782 723.413 840.303 806.147C739.234 816.88 643.532 833.426 555.879 855.339C545.593 810.619 537.991 767.239 532.624 725.649C511.605 554.816 537.543 421.995 597.916 386.666C611.333 378.616 628.774 375.039 649.345 375.039V275.311C611.78 275.311 577.792 283.361 548.276 300.355C422.611 372.802 394.437 598.642 459.282 882.172C181.119 968.036 0 1105.33 0 1250.22C0 1395.57 182.013 1533.31 461.071 1618.72C396.673 1903.15 425.294 2129.43 551.407 2201.88C580.475 2218.87 614.463 2226.92 652.029 2226.92C775.011 2226.92 936.005 2139.27 1098.79 1987.22C1261.57 2138.38 1422.57 2225.14 1545.55 2225.14C1583.11 2225.14 1617.1 2217.09 1646.62 2200.09C1772.28 2127.64 1800.46 1901.8 1735.61 1618.28C2012.88 1532.86 2194 1395.12 2194 1250.22ZM1611.74 951.936C1595.19 1009.63 1574.62 1069.1 1551.36 1128.58C1533.03 1092.81 1513.8 1057.03 1492.78 1021.25C1472.21 985.477 1450.29 950.595 1428.38 916.607C1491.88 925.998 1553.15 937.626 1611.74 951.936ZM1406.91 1428.21C1372.03 1488.59 1336.26 1545.83 1299.14 1599.05C1232.5 1604.86 1164.98 1607.99 1097 1607.99C1029.47 1607.99 961.943 1604.86 895.757 1599.49C858.639 1546.27 822.415 1489.48 787.532 1429.55C753.545 1370.97 722.687 1311.49 694.513 1251.57C722.24 1191.64 753.545 1131.71 787.085 1073.13C821.968 1012.76 857.744 955.514 894.862 902.296C961.496 896.482 1029.02 893.352 1097 893.352C1164.53 893.352 1232.06 896.482 1298.24 901.849C1335.36 955.067 1371.59 1011.86 1406.47 1071.79C1440.46 1130.37 1471.31 1189.85 1499.49 1249.78C1471.31 1309.7 1440.46 1369.63 1406.91 1428.21ZM1551.36 1370.08C1575.51 1430 1596.08 1489.93 1613.08 1548.06C1554.49 1562.37 1492.78 1574.45 1428.83 1583.84C1450.74 1549.41 1472.65 1514.08 1493.23 1477.85C1513.8 1442.08 1533.03 1405.85 1551.36 1370.08ZM1097.89 1847.25C1056.3 1804.31 1014.71 1756.46 973.571 1704.14C1013.82 1705.93 1054.96 1707.27 1096.55 1707.27C1138.59 1707.27 1180.18 1706.38 1220.88 1704.14C1180.63 1756.46 1139.04 1804.31 1097.89 1847.25ZM765.172 1583.84C701.669 1574.45 640.401 1562.82 581.817 1548.51C598.364 1490.82 618.935 1431.34 642.19 1371.86C660.526 1407.64 679.755 1443.42 700.774 1479.19C721.793 1514.97 743.259 1549.85 765.172 1583.84ZM1095.66 653.202C1137.25 696.133 1178.84 743.985 1219.98 796.308C1179.73 794.519 1138.59 793.178 1097 793.178C1054.96 793.178 1013.37 794.072 972.676 796.308C1012.93 743.985 1054.52 696.133 1095.66 653.202ZM764.725 916.607C742.812 951.042 720.899 986.371 700.327 1022.59C679.755 1058.37 660.526 1094.15 642.19 1129.92C618.041 1070 597.469 1010.07 580.475 951.936C639.06 938.073 700.774 925.998 764.725 916.607ZM360.002 1476.51C201.691 1408.98 99.2801 1320.44 99.2801 1250.22C99.2801 1180.01 201.691 1091.02 360.002 1023.94C398.462 1007.39 440.499 992.632 483.879 978.769C509.369 1066.42 542.91 1157.65 584.5 1251.12C543.357 1344.14 510.264 1434.92 485.22 1522.13C440.947 1508.26 398.909 1493.06 360.002 1476.51ZM600.6 2115.57C539.78 2080.69 513.394 1947.87 533.966 1777.03C538.885 1735 546.935 1690.72 556.773 1645.55C644.426 1667.02 740.129 1683.57 840.75 1694.3C901.123 1777.03 963.732 1852.16 1026.79 1917.9C880.999 2053.41 744.153 2127.64 651.134 2127.64C631.01 2127.2 614.016 2123.17 600.6 2115.57ZM1661.38 1774.8C1682.39 1945.63 1656.46 2078.45 1596.08 2113.78C1582.67 2121.83 1565.23 2125.41 1544.65 2125.41C1452.08 2125.41 1314.79 2051.62 1169 1917.01C1231.61 1851.27 1294.22 1776.59 1353.7 1693.85C1454.77 1683.12 1550.47 1666.57 1638.12 1644.66C1648.41 1689.83 1656.46 1733.21 1661.38 1774.8ZM1833.55 1476.51C1795.09 1493.06 1753.05 1507.82 1709.67 1521.68C1684.18 1434.03 1650.64 1342.8 1609.05 1249.33C1650.2 1156.31 1683.29 1065.53 1708.33 978.321C1752.61 992.185 1794.64 1007.39 1834 1023.94C1992.31 1091.46 2094.72 1180.01 2094.72 1250.22C2094.27 1320.44 1991.86 1409.43 1833.55 1476.51Z"
                  fill="#61DAFB"
                />
                <path
                  d="M1096.55 1454.6C1209.43 1454.6 1300.93 1363.1 1300.93 1250.22C1300.93 1137.35 1209.43 1045.85 1096.55 1045.85C983.68 1045.85 892.179 1137.35 892.179 1250.22C892.179 1363.1 983.68 1454.6 1096.55 1454.6Z"
                  fill="#61DAFB"
                />
              </svg>
            </div>
            <p className="techName">React</p>
          </div>
          <div className="individualTech" title="HTML">
            <div className="techImage">
              <svg
                viewBox="0 0 2183 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_353)">
                  <path
                    d="M182.791 2238.12L0 4.17578L2183 8.66502L1989.72 2238.12L1099.74 2495.82L182.791 2238.12Z"
                    fill="#E34F26"
                  />
                  <path
                    d="M1099.74 2280.08V216.931L1998.71 219.923L1838.4 2065.81L1099.74 2280.08Z"
                    fill="#EF652A"
                  />
                  <path
                    d="M1751.51 732.347L1776.96 459.648H394.049L470.454 1295.7H1424.86L1387.44 1652.29L1081.78 1734.68L771.637 1644.79L755.159 1432.03H480.946L518.409 1866.54L1081.76 2023.86L1649.61 1866.54L1726.01 1018.51H723.682L695.215 732.347H1751.51Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_353">
                    <rect width="2183" height="2500" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">HTML</p>
          </div>
          <div className="individualTech" title="CSS">
            <div className="techImage">
              <svg
                viewBox="0 0 1444 1664"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_357)">
                  <path
                    d="M-556.209 2238.11L-739 4.19336L1444 8.68259L1250.72 2238.11L360.739 2495.81L-556.209 2238.11Z"
                    fill="#1B73BA"
                  />
                  <path
                    d="M360.739 2280.06V216.948L1259.71 219.941L1099.4 2065.81L360.739 2280.06Z"
                    fill="#1C88C7"
                  />
                  <path
                    d="M1036.47 480.651H-346.447L-308.984 750.322H347.254L-298.492 1027.51L-261.046 1288.2H690.372L655.902 1652.27L333.769 1715.21L41.6162 1640.3L19.1348 1433.53H-249.057L-213.108 1863.55L362.236 2023.86L913.619 1848.57L984.038 1008.02H401.177L1036.45 744.337L1036.47 480.651Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_357">
                    <rect
                      width="2183"
                      height="2500"
                      fill="white"
                      transform="translate(-739)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">CSS</p>
          </div>
          <div className="individualTech" title="NodeJs">
            <div className="techImage">
              <svg
                viewBox="0 0 546 615"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M272.891 614.577C264.43 614.577 256.531 612.321 249.193 608.372L174.149 563.797C162.861 557.587 168.505 555.332 171.893 554.204C187.126 549.126 189.948 547.994 205.746 538.972C207.44 537.839 209.701 538.405 211.39 539.533L268.946 573.952C271.201 575.08 274.023 575.08 275.713 573.952L500.854 443.608C503.109 442.481 504.242 440.22 504.242 437.403V177.281C504.242 174.454 503.109 172.204 500.854 171.071L275.713 41.2934C273.457 40.1607 270.635 40.1607 268.946 41.2934L43.8048 171.071C41.5492 172.199 40.4166 175.021 40.4166 177.276V437.398C40.4166 439.659 41.5492 442.476 43.8048 443.608L105.31 479.155C138.602 496.082 159.478 476.333 159.478 456.585V199.847C159.478 196.463 162.3 193.075 166.25 193.075H195.025C198.413 193.075 201.797 195.897 201.797 199.847V456.585C201.797 501.159 177.532 527.118 135.214 527.118C122.237 527.118 112.082 527.118 83.3015 513.008L24.0564 479.155C9.38554 470.694 0.358398 454.891 0.358398 437.965V177.843C0.358398 160.916 9.38554 145.113 24.0564 136.652L249.193 6.30781C263.302 -1.59154 282.489 -1.59154 296.594 6.30781L521.73 136.652C536.401 145.113 545.433 160.916 545.433 177.843V437.965C545.433 454.891 536.401 470.694 521.73 479.155L296.594 609.499C289.256 612.888 280.79 614.577 272.891 614.577ZM342.295 435.709C243.554 435.709 223.239 390.568 223.239 352.199C223.239 348.811 226.061 345.428 230.011 345.428H259.352C262.736 345.428 265.558 347.683 265.558 351.072C270.074 380.975 283.05 395.646 342.862 395.646C390.258 395.646 410.578 384.925 410.578 359.533C410.578 344.862 404.929 334.145 331.013 326.807C269.507 320.597 231.138 307.059 231.138 257.969C231.138 212.262 269.512 185.176 333.835 185.176C406.057 185.176 441.608 210.006 446.124 264.169C446.124 265.868 445.558 267.557 444.43 269.251C443.298 270.379 441.609 271.507 439.914 271.507H410.573C407.751 271.507 404.929 269.251 404.367 266.43C397.596 235.399 380.103 225.239 333.835 225.239C281.923 225.239 275.713 243.298 275.713 256.836C275.713 273.201 283.05 278.279 353.017 287.306C422.422 296.338 455.152 309.314 455.152 357.838C454.585 407.495 413.961 435.709 342.295 435.709Z"
                  fill="#539E43"
                />
              </svg>
            </div>
            <p className="techName">NodeJs</p>
          </div>
          <div className="individualTech" title="MongoDB">
            <div className="techImage">
              <svg
                viewBox="0 0 2500 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1150.53 325.027L1204.71 426.788C1216.89 445.566 1230.08 462.188 1245.63 477.668C1291.19 522.669 1333.67 570.698 1372.76 621.427C1464.56 741.966 1526.48 875.829 1570.7 1020.6C1597.22 1109.04 1611.62 1199.76 1612.7 1291.5C1617.14 1565.76 1523.12 1801.25 1333.56 1996.97C1302.72 2028.01 1269.41 2056.48 1233.95 2082.11C1215.17 2082.11 1206.29 2067.71 1198.55 2054.45C1184.46 2029.86 1175.08 2002.86 1170.89 1974.83C1164.23 1941.65 1159.85 1908.47 1162.01 1874.21V1858.73C1160.49 1855.43 1143.93 332.83 1150.53 325.027Z"
                  fill="#599636"
                />
                <path
                  d="M1150.53 321.665C1148.31 317.224 1146.09 320.586 1143.86 322.743C1144.94 344.948 1137.2 364.742 1125.09 383.647C1111.76 402.426 1094.13 416.827 1076.43 432.307C978.091 517.446 900.692 620.285 838.71 735.305C756.235 890.103 713.729 1056 701.675 1230.66C696.156 1293.66 721.596 1515.96 741.453 1580.1C795.633 1750.37 892.952 1893.05 1019.01 2016.89C1049.97 2046.71 1083.09 2074.37 1117.35 2100.95C1127.31 2100.95 1128.38 2092.07 1130.67 2085.47C1135.04 2071.36 1138.36 2056.94 1140.63 2042.33L1162.83 1876.5L1150.53 321.665Z"
                  fill="#6CAC48"
                />
                <path
                  d="M1204.71 2149.49C1206.93 2124.11 1219.11 2103.05 1232.37 2082.05C1219.04 2076.53 1209.15 2065.55 1201.41 2053.31C1194.73 2041.71 1189.21 2029.5 1184.91 2016.83C1169.43 1970.39 1166.13 1921.67 1161.69 1874.21V1845.47C1156.17 1849.91 1155.03 1887.47 1155.03 1893.05C1151.8 1943.21 1145.15 1993.09 1135.11 2042.33C1131.81 2062.25 1129.59 2082.11 1117.35 2099.81C1117.35 2102.03 1117.35 2104.25 1118.42 2107.55C1138.34 2166.17 1143.8 2225.87 1147.16 2286.71V2308.92C1147.16 2335.43 1146.08 2329.85 1168.1 2338.73C1176.98 2342.03 1186.88 2343.17 1195.76 2349.77C1202.42 2349.77 1203.5 2344.25 1203.5 2339.81L1200.2 2303.33V2201.57C1199.12 2183.81 1202.42 2166.17 1204.64 2149.55L1204.71 2149.49Z"
                  fill="#C2BFBF"
                />
              </svg>
            </div>
            <p className="techName">MongoDB</p>
          </div>
          <div className="individualTech" title="Bootstrap">
            <div className="techImage">
              <svg
                viewBox="0 0 2500 1992"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_414)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M519.258 0.238281C376.611 0.238281 271.06 125.092 275.786 260.492C280.322 390.575 274.429 559.052 232.017 696.444C189.453 834.223 117.52 921.532 0 932.738V1059.26C117.52 1070.49 189.453 1157.76 232.012 1295.56C274.429 1432.95 280.317 1601.42 275.781 1731.51C271.055 1866.89 376.606 1991.76 519.277 1991.76H1980.93C2123.58 1991.76 2229.11 1866.91 2224.38 1731.51C2219.85 1601.42 2225.74 1432.95 2268.15 1295.56C2310.72 1157.76 2382.48 1070.46 2500 1059.26V932.738C2382.48 921.508 2310.72 834.242 2268.15 696.444C2225.74 559.071 2219.85 390.575 2224.38 260.492C2229.11 125.111 2123.58 0.238281 1980.93 0.238281H519.238H519.258ZM1694.92 1226.15C1694.92 1412.59 1555.85 1525.66 1325.06 1525.66H932.202C920.964 1525.66 910.186 1521.2 902.24 1513.25C894.293 1505.31 889.829 1494.53 889.829 1483.29V508.715C889.829 497.477 894.293 486.699 902.24 478.753C910.186 470.806 920.964 466.342 932.202 466.342H1322.83C1515.26 466.342 1641.56 570.58 1641.56 730.619C1641.56 842.948 1556.6 943.51 1448.36 961.127V966.986C1595.7 983.148 1694.92 1085.2 1694.92 1226.15ZM1282.23 600.663H1058.22V917.069H1246.89C1392.74 917.069 1473.16 858.339 1473.16 753.363C1473.14 654.984 1404 600.663 1282.23 600.663ZM1058.22 1042.61V1391.3H1290.47C1442.32 1391.3 1522.76 1330.37 1522.76 1215.85C1522.76 1101.34 1440.07 1042.59 1280.7 1042.59H1058.22V1042.61Z"
                    fill="#7952B3"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_414">
                    <rect width="2500" height="1992" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">Bootstrap</p>
          </div>
          <div className="individualTech" title="Figma">
            <div className="techImage">
              <svg
                viewBox="0 0 1667 2500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_416)">
                  <path
                    d="M833.5 1250C833.5 1019.89 1020.05 833.333 1250.17 833.333C1480.28 833.333 1666.83 1019.89 1666.83 1250C1666.83 1480.12 1480.28 1666.67 1250.17 1666.67C1020.05 1666.67 833.5 1480.12 833.5 1250Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M0.166992 2083.33C0.166992 1853.22 186.713 1666.67 416.834 1666.67H833.5V2083.33C833.5 2313.45 646.954 2500 416.834 2500C186.713 2500 0.166992 2313.45 0.166992 2083.33Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M833.5 0.00585938V833.333H1250.17C1480.29 833.333 1666.83 646.787 1666.83 416.667C1666.83 186.546 1480.29 0.00585938 1250.17 0.00585938H833.5Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M0.166992 416.667C0.166992 646.787 186.713 833.333 416.834 833.333H833.5V0H416.834C186.713 0 0.166992 186.552 0.166992 416.667Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M0.166992 1250C0.166992 1480.12 186.713 1666.67 416.834 1666.67H833.5V833.333H416.834C186.713 833.333 0.166992 1019.89 0.166992 1250Z"
                    fill="#A259FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_416">
                    <rect width="1667" height="2500" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">Figma</p>
          </div>
          <div className="individualTech" title="Photoshop">
            <div className="techImage">
              <svg
                viewBox="0 0 2500 2438"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_423)">
                  <path
                    d="M442.708 0.25H2057.29C2302.08 0.25 2500 198.167 2500 442.958V1995.04C2500 2239.83 2302.08 2437.75 2057.29 2437.75H442.708C197.917 2437.75 0 2239.83 0 1995.04V442.958C0 198.167 197.917 0.25 442.708 0.25Z"
                    fill="#001E36"
                  />
                  <path
                    d="M562.5 1709.62V637.75C562.5 630.458 565.625 626.291 572.917 626.291C590.625 626.291 607.292 626.292 631.25 625.25C656.25 624.208 682.292 624.208 710.417 623.166C738.542 622.125 768.75 622.125 801.042 621.083C833.333 620.041 864.583 620.042 895.833 620.042C981.25 620.042 1052.08 630.458 1110.42 652.333C1162.5 670.041 1210.42 699.208 1250 737.75C1283.33 771.083 1309.38 811.708 1326.04 856.5C1341.67 900.25 1350 945.041 1350 991.916C1350 1081.5 1329.17 1155.46 1287.5 1213.79C1245.83 1272.12 1187.5 1315.87 1119.79 1340.87C1048.96 1366.92 970.833 1376.29 885.417 1376.29C860.417 1376.29 843.75 1376.29 833.333 1375.25C822.917 1374.21 808.333 1374.21 788.542 1374.21V1708.58C789.583 1715.87 784.375 1722.12 777.083 1723.17H575C566.667 1723.17 562.5 1719 562.5 1709.62ZM789.583 827.333V1177.33C804.167 1178.37 817.708 1179.42 830.208 1179.42H885.417C926.042 1179.42 966.667 1173.17 1005.21 1160.67C1038.54 1151.29 1067.71 1131.5 1090.62 1105.46C1112.5 1079.42 1122.92 1044 1122.92 998.167C1123.96 965.875 1115.63 933.583 1098.96 905.458C1081.25 878.375 1056.25 857.541 1026.04 846.083C987.5 830.458 945.833 824.208 903.125 825.25C876.042 825.25 852.083 825.25 832.292 826.292C811.458 825.25 796.875 826.292 789.583 827.333ZM2000 1113.79C1968.75 1097.12 1935.42 1085.67 1900 1078.37C1861.46 1070.04 1822.92 1064.83 1783.33 1064.83C1762.5 1063.79 1740.63 1066.92 1720.83 1072.12C1707.29 1075.25 1695.83 1082.54 1688.54 1092.96C1683.33 1101.29 1680.21 1111.71 1680.21 1121.08C1680.21 1130.46 1684.38 1139.83 1690.63 1148.17C1700 1159.62 1712.5 1169 1726.04 1176.29C1750 1188.79 1775 1200.25 1800 1210.67C1856.25 1229.42 1910.42 1255.46 1960.42 1286.71C1994.79 1308.58 2022.92 1337.75 2042.71 1373.17C2059.38 1406.5 2067.71 1442.96 2066.67 1480.46C2067.71 1529.42 2053.13 1578.37 2026.04 1619C1996.88 1660.67 1956.25 1692.96 1909.38 1711.71C1858.33 1733.58 1795.83 1745.04 1720.83 1745.04C1672.92 1745.04 1626.04 1740.87 1579.17 1731.5C1542.71 1725.25 1506.25 1713.79 1472.92 1698.17C1465.62 1694 1460.42 1686.71 1461.46 1678.37V1497.12C1461.46 1494 1462.5 1489.83 1465.62 1487.75C1468.75 1485.67 1471.88 1486.71 1475 1488.79C1515.63 1512.75 1558.33 1529.42 1604.17 1539.83C1643.75 1550.25 1685.42 1555.46 1727.08 1555.46C1766.67 1555.46 1794.79 1550.25 1813.54 1540.87C1830.21 1533.58 1841.67 1515.87 1841.67 1497.12C1841.67 1482.54 1833.33 1469 1816.67 1455.46C1800 1441.92 1765.63 1426.29 1714.58 1406.5C1661.46 1387.75 1612.5 1362.75 1566.67 1331.5C1534.37 1308.58 1507.29 1278.37 1487.5 1242.96C1470.83 1209.62 1462.5 1173.17 1463.54 1136.71C1463.54 1091.92 1476.04 1049.21 1498.96 1010.67C1525 969 1563.54 935.667 1608.33 914.833C1657.29 889.833 1718.75 878.375 1792.71 878.375C1835.42 878.375 1879.17 881.5 1921.88 887.75C1953.13 891.916 1983.33 900.25 2011.46 911.708C2015.63 912.75 2019.79 916.917 2021.88 921.083C2022.92 925.25 2023.96 929.416 2023.96 933.583V1103.37C2023.96 1107.54 2021.88 1111.71 2018.75 1113.79C2009.38 1115.87 2004.17 1115.87 2000 1113.79Z"
                    fill="#31A8FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_423">
                    <rect width="2500" height="2438" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">Photoshop</p>
          </div>
          <div className="individualTech" title="Illustrator">
            <div className="techImage">
              <svg
                viewBox="0 0 240 234"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1655_427)">
                  <path
                    d="M42.5 0H197.5C221 0 240 19 240 42.5V191.5C240 215 221 234 197.5 234H42.5C19 234 0 215 0 191.5V42.5C0 19 19 0 42.5 0Z"
                    fill="#330000"
                  />
                  <path
                    d="M116 140H78.8001L71.2001 163.5C71.0001 164.4 70.2001 165 69.3001 164.9H50.5001C49.4001 164.9 49.1001 164.3 49.4001 163.1L81.6001 70.3999C81.9001 69.3999 82.2001 68.2999 82.6001 67.0999C83.0001 64.9999 83.2001 62.7999 83.2001 60.5999C83.1001 60.0999 83.5001 59.5999 84.0001 59.4999H109.9C110.7 59.4999 111.1 59.7999 111.2 60.2999L147.7 163.3C148 164.4 147.7 164.9 146.7 164.9H125.8C125.1 165 124.4 164.5 124.2 163.8L116 140ZM84.6001 119.7H110C109.4 117.6 108.6 115.1 107.7 112.5C106.8 109.8 105.9 106.9 105 103.9C104 100.8 103.1 97.7999 102.1 94.6999C101.1 91.5999 100.2 88.6999 99.4001 85.7999C98.6001 82.9999 97.9001 80.3999 97.2001 77.9999H97.0001C96.1001 82.2999 95.0001 86.5999 93.6001 90.8999C92.1001 95.6999 90.6001 100.7 89.0001 105.7C87.6001 110.8 86.1001 115.5 84.6001 119.7ZM170 76.9999C166.7 77.0999 163.5 75.7999 161.1 73.4999C158.8 70.9999 157.6 67.6999 157.7 64.2999C157.6 60.8999 158.9 57.6999 161.3 55.3999C163.7 53.0999 166.9 51.8999 170.2 51.8999C174.1 51.8999 177.1 53.0999 179.3 55.3999C181.5 57.7999 182.7 60.9999 182.6 64.2999C182.7 67.6999 181.5 70.9999 179.1 73.4999C176.8 75.8999 173.4 77.1999 170 76.9999ZM158.8 163.8V86.7999C158.8 85.7999 159.2 85.3999 160.1 85.3999H179.9C180.8 85.3999 181.2 85.8999 181.2 86.7999V163.8C181.2 164.9 180.8 165.4 179.9 165.4H160.3C159.3 165.4 158.8 164.8 158.8 163.8Z"
                    fill="#FF9A00"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1655_427">
                    <rect width="240" height="234" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p className="techName">Illustrator</p>
          </div>
        </div>
      </div>
      <div className="productPageLayout">
        <h3 className="titleInProjectPage">Experience</h3>

        <div className="contentInProjectPage experience">
          <div className="timeLineSection">
            <p className="timeline">Sep 2022</p>
            <p className="timeline">to</p>
            <p className="timeline">Jan 2023</p>
          </div>
          <div className="workDetailsSection">
            <h4 className="titleInProjectPage role">UX designer</h4>
            <p className="expPara">Freelance - Sydney - Australia 5 mon</p>
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText">Process Planning mobile App:</span>
                Where the application guides and helps the employee plan their
                work(includes finding) effectively
              </li>
            </ul>
          </div>
        </div>
        <div className="contentInProjectPage experience">
          <div className="timeLineSection">
            <p className="timeline">Mar 2022</p>
            <p className="timeline">to</p>
            <p className="timeline">Jun 2022</p>
          </div>
          <div className="workDetailsSection">
            <h4 className="titleInProjectPage role">UX designer</h4>
            <p className="expPara">Freelance - 4 mon</p>
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText">
                  Newspaper Ad booking project: Success measure:
                </span>
                reduced 30% cost reduction in customer support. Key changes -
                Intuitive site navigation and improved information architecture.
              </li>
              <li className="expPara">
                <span className="boldText">
                  Website Bounce rate reduction: Success measure
                </span>
                - reduced on avg. 11% bounce rate on all landing pages. Key
                changes - More Interactive elements, grounded copywriting to the
                target audience and a more engaging story (Messaging).
              </li>
            </ul>
          </div>
        </div>

        <div className="contentInProjectPage experience">
          <div className="timeLineSection">
            <p className="timeline">Jun 2020</p>
            <p className="timeline">to</p>
            <p className="timeline">Feb 2022</p>
          </div>
          <div className="workDetailsSection">
            <h4 className="titleInProjectPage role">UX designer</h4>
            <p className="expPara">
              Wersel Brand Analytics/ Datinfi pvt Ltd (Coimbatore - India) - 1yr
              8 mon
            </p>
            <ul className="expDescription">
              <li className="expPara">
                <span className="boldText">Product: Success target:</span>
                we were headed towards building more intuitive, interactive and
                simpler user flows.Key features - Data search, Team management,
                Data Visualization and monitoring
              </li>
              <li className="expPara">
                <span className="boldText">Client-side service projects:</span>:
                Organaizational sales performance management software,
                Hyperlocal data interpretation product, counterfeit product
                identification application (mobile). Responsibilities -
                Stakeholder workshops, Research, Flows, Sitemaps, wireframes,
                prototypes, and usability testing
              </li>
            </ul>
          </div>
        </div>
        <div className="contentInProjectPage experience">
          <div className="timeLineSection">
            <p className="timeline">Sep 2019</p>
            <p className="timeline">to</p>
            <p className="timeline">Mar 2020</p>
          </div>
          <div className="workDetailsSection">
            <h4 className="titleInProjectPage role">Design Trainer</h4>
            <p className="expPara">
              Digital Academy 360 (Bangalore - India) - 7 mon
            </p>
            <ul className="expDescription">
              <li className="expPara">
                Trained 200+ students from varied professionals and age groups.
                Understanding student’s mentality and better communication are
                the key factors learned.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="caseStudiesContainer">
        <p className="secondaryTitle">Few Projects & Casestudies</p>
        <div className="homeCardsContainer">
        <div className="cardLayout">
            <Card
              type="Development"
              title="Task Management Web app for teams alike Trello"
              who="Portfolio Project"
              role="Research, design wireframes to code"
              id="2"
              image='https://res.cloudinary.com/ddycjnke1/Display_Img_brwt32'
              
            />
          </div>
          
         
          <div className="cardLayout">
            <Card
              type="Development"
              title="Connecting Artists with Clients Through a Seamless Booking and Communication Platform."
              who="Freelance Artists"
              role="Research to code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id='3'
              image='https://res.cloudinary.com/ddycjnke1/Display_Image_juphsd'
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Development"
              title="E-commerce Platform for Natural Products with Product and Delivery Management."
              who="Product Owners"
              role="code"
              // link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              id='4'
              image='https://res.cloudinary.com/ddycjnke1/Display_Image_mx4bjc'
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Development"
              title="MERN Ecommerce Practice Project With Admin Dashboard"
              id="1"
              image="https://res.cloudinary.com/ddycjnke1/EcommerceCardPreview_p3am4o"
              who="Practice Project"
              role="Design-Code"
            />
          </div>
          <div className="cardLayout">
            <Card
              type="Case Study"
              title="Improving Customer Lifetime Value CLTV - Here its productivity"
              image="https://res.cloudinary.com/ddycjnke1/Preview_image_bskymj"
              link="https://www.behance.net/gallery/145928103/Improving-customer-lifetime-value-CLTV"
              who='Team Management Platforms'
              role='Research'
            />
          </div>
           <div className="cardLayout">
            <Card
              type="Design"
              title="To Design a complex sales management application - with simpler userflows and information architecture"
              who="Hospitality Marketing Team"
              role="Research to UI"
              link="https://www.behance.net/gallery/148002641/Ux-Case-study-Improving-Information-Architect"
              image='https://res.cloudinary.com/ddycjnke1/PreviewImage3_snpk78'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
