import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const MoonCloud = () => {
  const color = useContext(ThemeContext).color;

  return (
    <>
      <style jsx>{`
        .moonCloud {
          display: none;
        }

        @media screen and (min-width: 1200px) {
          .moonCloud {
            display: block;
            width: 600px;
            position: absolute;
            right: 7vw;
            z-index: -1;
          }
          .st0 {
            fill: ${color};
          }
          .st1 {
            fill: ${color};
            filter: brightness(50%);
          }
          .st2 {
            fill: #0e0e0e;
          }
        }
      `}</style>
      <div data-aos="fade-up" className="moonCloud">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 288 288"
          space="preserve"
        >
          <g>
            <g>
              <path
                className="st0"
                d="M46.5,117.1c-1,0.2-1.2,0.4-1.4,1.4c-0.2-1-0.4-1.2-1.4-1.4c1-0.2,1.2-0.4,1.4-1.4
                                C45.4,116.7,45.5,116.9,46.5,117.1z"
              />
              <path
                className="st0"
                d="M241.8,68.2c-1.4,0.3-1.6,0.5-1.9,1.9c-0.3-1.4-0.5-1.6-1.9-1.9c1.4-0.3,1.6-0.5,1.9-1.9
                                C240.2,67.7,240.5,67.9,241.8,68.2z"
              />
              <path
                className="st0"
                d="M54,150.8c-3,0.7-3.5,1.2-4.2,4.2c-0.7-3-1.2-3.5-4.2-4.2c3-0.7,3.5-1.2,4.2-4.2
                                C50.4,149.6,51,150.2,54,150.8z"
              />
              <path
                className="st0"
                d="M157.7,37.3c-2.5,0.5-3,1-3.5,3.5c-0.5-2.5-1-3-3.5-3.5c2.5-0.5,3-1,3.5-3.5
                                C154.7,36.3,155.1,36.8,157.7,37.3z"
              />
              <path
                className="st0"
                d="M218.5,103.8c-2.6,0.6-3.1,1-3.6,3.6c-0.6-2.6-1-3.1-3.6-3.6c2.6-0.6,3.1-1,3.6-3.6
                                C215.5,102.8,215.9,103.3,218.5,103.8z"
              />
              <circle className="st0" cx="72.2" cy="108.1" r="3.8" />
              <path
                className="st0"
                d="M195.3,67.8c-3.5,0.8-4.1,1.4-4.8,4.8c-0.8-3.5-1.4-4.1-4.8-4.8c3.5-0.8,4.1-1.4,4.8-4.8
                                C191.3,66.5,191.9,67.1,195.3,67.8z"
              />
              <path
                className="st0"
                d="M27.5,165.6c-1,0.2-1.2,0.4-1.4,1.4c-0.2-1-0.4-1.2-1.4-1.4c1-0.2,1.2-0.4,1.4-1.4
                                C26.3,165.2,26.5,165.3,27.5,165.6z"
              />
              <circle className="st0" cx="197.3" cy="140.8" r="3.8" />
              <path
                className="st0"
                d="M209.2,42.5c-1.1,0.2-1.3,0.4-1.5,1.5c-0.2-1.1-0.4-1.3-1.5-1.5c1.1-0.2,1.3-0.4,1.5-1.5
                                C207.9,42.1,208.1,42.3,209.2,42.5z"
              />
              <path
                className="st0"
                d="M78.6,75.8c-1.2,0.3-1.4,0.5-1.7,1.7c-0.3-1.2-0.5-1.4-1.7-1.7c1.2-0.3,1.4-0.5,1.7-1.7
                                C77.1,75.3,77.4,75.5,78.6,75.8z"
              />
              <path
                className="st0"
                d="M111.2,47.3c-1,0.2-1.2,0.4-1.4,1.4c-0.2-1-0.4-1.2-1.4-1.4c1-0.2,1.2-0.4,1.4-1.4
                                C110,46.9,110.2,47,111.2,47.3z"
              />
              <path
                className="st0"
                d="M257,105.5c-1,0.2-1.1,0.4-1.4,1.4c-0.2-1-0.4-1.1-1.4-1.4c1-0.2,1.1-0.4,1.4-1.4
                                C255.8,105.2,256,105.3,257,105.5z"
              />
              <path
                className="st0"
                d="M241.1,145.1c-3.1,0.7-3.6,1.2-4.3,4.3c-0.7-3.1-1.2-3.6-4.3-4.3c3.1-0.7,3.6-1.2,4.3-4.3
                                C237.5,143.9,238,144.4,241.1,145.1z"
              />
              <path
                className="st0"
                d="M179.3,102.7c-1,0.2-1.1,0.4-1.3,1.3c-0.2-1-0.4-1.1-1.3-1.3c1-0.2,1.1-0.4,1.3-1.3
                                C178.2,102.3,178.3,102.5,179.3,102.7z"
              />
            </g>
            <g>
              <path
                className="st0"
                d="M232.4,179.8c-36.7,27.8-86.9,9.1-103.1-23.2c-15.8-28.7-9.4-70.8,21.9-91.2c-4.4,7.3-9.5,16.7-10.7,22.5
                                c-0.2,0.9-0.4,1.7-0.5,2.6c-8,33.8,16.2,85.3,63.7,91.8c2,0.3,5.1,0.6,7.5,0.6C216.8,183,225.1,181.6,232.4,179.8z"
              />
              <path
                className="st1"
                d="M232.4,179.8c-6.4,9.9-15.1,18.2-24.5,23.8c-21.3,13.1-48.6,14.6-72,3.3c-0.3-0.1-0.5-0.3-0.8-0.4
                                c-0.9-0.4-1.7-0.9-2.6-1.3c-0.3-0.1-0.6-0.3-0.8-0.5h0c-1.1-0.6-2.1-1.2-3.2-1.9c-0.2-0.1-0.5-0.3-0.7-0.4
                                c-0.2-0.1-0.4-0.2-0.5-0.4c-0.3-0.2-0.5-0.3-0.8-0.5c-0.8-0.5-1.5-1-2.2-1.5c-0.1-0.1-0.1-0.1-0.2-0.1c-0.2-0.2-0.5-0.3-0.7-0.5
                                c-0.2-0.2-0.5-0.3-0.7-0.5c-1.1-0.8-2.1-1.6-3.1-2.5c-0.2-0.2-0.4-0.3-0.6-0.5c-14.5-12.4-23.8-31.7-25.3-47.2c0-0.1,0-0.2,0-0.2
                                c-3.1-23.4,5.2-48.9,25.3-66.5c0,0,0.1-0.1,0.1-0.1c5.1-4.3,10.5-8.1,16.8-11.1c4.2-2.1,10.2-4.1,13.6-5c0.5-0.1,1.1-0.3,1.6-0.4
                                c-41,28.8-39.8,91.3,3.4,117.3c0.1,0.1,0.3,0.2,0.4,0.3c0.7,0.4,1.4,0.8,2.1,1.2C184.2,198.2,212.2,194.4,232.4,179.8z"
              />
            </g>
            <g>
              <path
                className="st2"
                d="M169.3,206.6c0.7-1.4,1-3,0.9-4.7c-0.3-5.4-4.9-9.6-10.3-9.3c-1.6,0.1-3,0.5-4.3,1.3c0.3-1.1,0.4-2.3,0.3-3.4
                                c-0.4-7.3-8.3-13.2-14.6-12.9c-1.9,0.1-3.7,0.7-5.3,1.6c0-0.4,0-0.9,0-1.3c-0.6-10.7-9.7-18.9-20.4-18.3
                                c-9.3,0.5-16.8,7.5-18.1,16.5c-3.7-5.1-9.9-8.2-16.6-7.9c-8.9,0.5-16,6.9-17.9,15.1c-0.2,0.2-0.4,0.4-0.5,0.6
                                c-2.2-1.4-4.9-2.2-7.7-2.1c-7.1,0.4-12.6,6.5-12.2,13.6c0,0.2,0,0.3,0,0.4c-1.5-1-3.2-1.5-5.1-1.4c-4.8,0.3-8.4,4.3-8.1,9.1
                                c0.3,4.8,4.3,8.4,9.1,8.1c0.1,0,0.2,0,0.3,0c0.7,4.9,5.1,8.6,10.2,8.3c1.3-0.1,2.6-0.4,3.7-0.9c0,0.1,0,0.3,0,0.4
                                c0.3,6,5.5,10.6,11.5,10.3c4.8-0.3,8.7-3.6,9.9-8c2,6,7.8,10.2,14.4,9.8c5.8-0.3,10.6-4.1,12.6-9.2c2.2,2,5.2,3.2,8.4,3
                                c4.4-0.2,8-2.9,9.8-6.6c2.5,4.9,7.7,8.1,13.5,7.7c6.1-0.3,11-4.4,12.8-9.8c1.4,3.9,5.3,6.7,9.7,6.4c1.8-0.1,3.5-0.7,4.9-1.6
                                c1.8,3,5.2,4.9,8.9,4.7c5.4-0.3,9.6-4.9,9.3-10.3C178.1,210.8,174.1,206.9,169.3,206.6z"
              />
              <g>
                <path
                  className="st1"
                  d="M169.5,211.4c4.1,0.3,7.5,3.1,8.7,6.9c0.2-0.8,0.2-1.6,0.2-2.4c-0.2-4.6-3.6-8.2-7.9-9.1
                                    C170.5,208.4,170.2,210,169.5,211.4z"
                />
                <path
                  className="st1"
                  d="M156.2,195.2c0.1,1.2-0.1,2.3-0.3,3.4c1.3-0.7,2.7-1.2,4.3-1.3c4.6-0.2,8.6,2.7,9.9,6.9
                                    c0.2-0.8,0.2-1.6,0.2-2.4c-0.3-5.4-4.9-9.6-10.3-9.3c-1.4,0.1-2.7,0.5-3.9,1.1C156.1,194.2,156.1,194.7,156.2,195.2z"
                />
                <path
                  className="st1"
                  d="M37.8,199.2c1.9-0.1,3.7,0.4,5.1,1.4c0-0.1,0-0.3,0-0.4c-0.4-7.1,5.1-13.2,12.2-13.6
                                    c2.8-0.2,5.5,0.6,7.7,2.1c0.2-0.2,0.3-0.4,0.5-0.6c1.8-8.3,9-14.6,17.9-15.1c6.8-0.4,12.9,2.8,16.6,7.9
                                    c1.3-8.9,8.8-15.9,18.1-16.5c10.7-0.6,19.8,7.6,20.4,18.3c0,0.4,0,0.9,0,1.3c1.6-0.9,3.3-1.5,5.3-1.6c5.6-0.3,12.5,4.4,14.2,10.6
                                    c0.1-0.8,0.2-1.6,0.1-2.5c-0.4-7.3-8.3-13.2-14.6-12.9c-1.9,0.1-3.7,0.7-5.3,1.6c0-0.4,0-0.9,0-1.3c-0.6-10.7-9.7-18.9-20.4-18.3
                                    c-9.3,0.5-16.8,7.5-18.1,16.5c-3.7-5.1-9.9-8.2-16.6-7.9c-8.9,0.5-16,6.9-17.9,15.1c-0.2,0.2-0.4,0.4-0.5,0.6
                                    c-2.2-1.4-4.9-2.2-7.7-2.1c-7.1,0.4-12.6,6.5-12.2,13.6c0,0.2,0,0.3,0,0.4c-1.5-1-3.2-1.5-5.1-1.4c-4.8,0.3-8.4,4.3-8.1,9.1
                                    c0,0.8,0.2,1.6,0.5,2.4C30.7,202.3,33.8,199.5,37.8,199.2z"
                />
              </g>
              <path
                className="st1"
                d="M97,180.8c4.3-0.2,8.1,2.8,8.9,6.9c0-0.4,0.1-0.9,0-1.3c-0.3-4.8-4.3-8.4-9.1-8.2c-4.8,0.3-8.4,4.3-8.2,9.1
                                c0,0.4,0.1,0.9,0.2,1.3C89.3,184.5,92.7,181.1,97,180.8z"
              />
              <path
                className="st1"
                d="M136.2,184.2c4.1,1.3,6.6,5.5,5.9,9.6c0.2-0.4,0.4-0.8,0.5-1.2c1.5-4.6-1-9.4-5.6-10.9
                                c-4.6-1.5-9.4,1-10.9,5.6c-0.1,0.4-0.2,0.8-0.3,1.3C127.7,184.8,132.1,182.9,136.2,184.2z"
              />
              <path
                className="st1"
                d="M63.1,189.8c2.8-0.7,5.7,0.8,6.8,3.4c0-0.3-0.1-0.6-0.1-0.9c-0.8-3.1-3.9-5-7-4.3c-3.1,0.8-5,3.9-4.3,7
                                c0.1,0.3,0.2,0.6,0.3,0.8C58.4,193.1,60.3,190.4,63.1,189.8z"
              />
            </g>
            <g>
              <path
                className="st2"
                d="M250.8,222.8c0.5-1,0.7-2.2,0.7-3.4c-0.2-3.9-3.5-6.9-7.4-6.7c-1.1,0.1-2.2,0.4-3.1,0.9
                                c0.2-0.8,0.3-1.6,0.2-2.5c-0.3-5.3-6-9.5-10.5-9.3c-1.4,0.1-2.7,0.5-3.8,1.1c0-0.3,0-0.6,0-0.9c-0.4-7.7-7-13.6-14.7-13.2
                                c-6.7,0.4-12.1,5.4-13.1,11.9c-2.7-3.7-7.1-5.9-12-5.7c-6.4,0.3-11.5,4.9-12.9,10.9c-0.1,0.1-0.3,0.3-0.4,0.4
                                c-1.6-1-3.5-1.6-5.6-1.5c-5.1,0.3-9.1,4.7-8.8,9.8c0,0.1,0,0.2,0,0.3c-1.1-0.7-2.3-1.1-3.7-1c-3.4,0.2-6.1,3.1-5.9,6.5
                                c0.2,3.4,3.1,6.1,6.5,5.9c0.1,0,0.1,0,0.2,0c0.5,3.6,3.7,6.2,7.4,6c1-0.1,1.8-0.3,2.7-0.7c0,0.1,0,0.2,0,0.3
                                c0.2,4.3,3.9,7.6,8.3,7.4c3.5-0.2,6.3-2.6,7.1-5.8c1.4,4.3,5.6,7.3,10.4,7.1c4.2-0.2,7.7-2.9,9.1-6.6c1.6,1.5,3.7,2.3,6,2.2
                                c3.2-0.2,5.8-2.1,7.1-4.8c1.8,3.5,5.6,5.8,9.7,5.6c4.4-0.2,8-3.2,9.3-7.1c1,2.8,3.8,4.8,7,4.6c1.3-0.1,2.5-0.5,3.5-1.2
                                c1.3,2.2,3.7,3.6,6.4,3.4c3.9-0.2,6.9-3.5,6.7-7.4C257.2,225.8,254.3,223,250.8,222.8z"
              />
              <g>
                <path
                  className="st1"
                  d="M251,226.2c2.9,0.2,5.4,2.2,6.2,5c0.1-0.6,0.2-1.1,0.1-1.7c-0.2-3.3-2.6-5.9-5.7-6.6
                                    C251.7,224.1,251.5,225.2,251,226.2z"
                />
                <path
                  className="st1"
                  d="M241.4,214.6c0,0.9,0,1.7-0.2,2.5c0.9-0.5,2-0.8,3.1-0.9c3.3-0.2,6.2,2,7.1,5c0.1-0.6,0.2-1.1,0.1-1.7
                                    c-0.2-3.9-3.5-6.9-7.4-6.7c-1,0.1-2,0.3-2.8,0.8C241.3,213.8,241.3,214.2,241.4,214.6z"
                />
                <path
                  className="st1"
                  d="M156,217.5c1.4-0.1,2.6,0.3,3.7,1c0-0.1,0-0.2,0-0.3c-0.3-5.1,3.7-9.5,8.8-9.8c2.1-0.1,4,0.5,5.6,1.5
                                    c0.1-0.2,0.2-0.3,0.4-0.4c1.3-6,6.5-10.6,12.9-10.9c4.9-0.3,9.3,2,12,5.7c1-6.4,6.3-11.5,13.1-11.9c7.7-0.4,14.3,5.5,14.7,13.2
                                    c0,0.3,0,0.6,0,0.9c1.1-0.7,2.4-1.1,3.8-1.1c4-0.2,9,3.2,10.2,7.6c0.1-0.6,0.1-1.2,0.1-1.8c-0.3-5.3-6-9.5-10.5-9.3
                                    c-1.4,0.1-2.7,0.5-3.8,1.1c0-0.3,0-0.6,0-0.9c-0.4-7.7-7-13.6-14.7-13.2c-6.7,0.4-12.1,5.4-13.1,11.9c-2.7-3.7-7.1-5.9-12-5.7
                                    c-6.4,0.3-11.5,4.9-12.9,10.9c-0.1,0.1-0.3,0.3-0.4,0.4c-1.6-1-3.5-1.6-5.6-1.5c-5.1,0.3-9.1,4.7-8.8,9.8c0,0.1,0,0.2,0,0.3
                                    c-1.1-0.7-2.3-1.1-3.7-1c-3.4,0.2-6.1,3.1-5.9,6.5c0,0.6,0.2,1.2,0.3,1.7C150.9,219.7,153.2,217.6,156,217.5z"
                />
              </g>
              <path
                className="st1"
                d="M198.7,204.2c3.1-0.2,5.8,2,6.5,5c0-0.3,0-0.6,0-0.9c-0.2-3.4-3.1-6.1-6.6-5.9c-3.4,0.2-6.1,3.1-5.9,6.6
                                c0,0.3,0.1,0.6,0.1,0.9C193.1,206.8,195.6,204.4,198.7,204.2z"
              />
              <path
                className="st1"
                d="M227,206.7c3,1,4.7,4,4.2,7c0.1-0.3,0.3-0.6,0.4-0.9c1.1-3.3-0.7-6.8-4-7.9c-3.3-1.1-6.8,0.7-7.9,4
                                c-0.1,0.3-0.2,0.6-0.2,0.9C220.8,207.1,224,205.7,227,206.7z"
              />
              <path
                className="st1"
                d="M174.2,210.6c2-0.5,4.1,0.6,4.9,2.5c0-0.2,0-0.4-0.1-0.6c-0.6-2.2-2.8-3.6-5.1-3.1c-2.2,0.6-3.6,2.8-3.1,5.1
                                c0.1,0.2,0.1,0.4,0.2,0.6C170.9,213.1,172.2,211.1,174.2,210.6z"
              />
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default MoonCloud;