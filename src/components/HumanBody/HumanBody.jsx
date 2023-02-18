import "./HumanBody.css";
import bodyHuman from "../../assets/body-image.svg"
import handLeft from "../../assets/hand-left.svg"
import handRight from "../../assets/hand-right.svg"
import tailbone from "../../assets/tailbone.svg"
import legLeft from "../../assets/leg-left.svg"
import legRight from "../../assets/leg-right.svg"

function HumanBody({stateLives}) {
    

    return (
        <div className="body">
            {stateLives < 7 && <svg  className=" body__head head" x="0px" y="0px" viewBox="0 0 300 300">
                <path fill="#BD438C" d="M193.05,189.53c-35.16-14.59-67.54-21.98-99.31-22.38c-11.09-0.14-17.01,1.89-20.03,4.59 c-0.03,0.11-0.05,0.19-0.05,0.19c-1.7,8.07,7.65,21.23,63.28,34.4c84.93,22.08,89.6,3.82,89.6,3.82v-0.69 C223.77,204.09,212.88,198.27,193.05,189.53z" />
                <path fill="#BD438C" d="M93.74,167.15c-6.26-0.08-10.87,0.53-14.25,1.57c6.67,7.18,23.25,15.77,59.58,24.37 c47.07,12.24,69.48,12.08,80.11,9.52c-5.64-3.66-14.28-7.84-26.14-13.07C157.88,174.94,125.51,167.55,93.74,167.15z" />
                <path className="head__face" fill="#E47DB0" d="M109.76,31.37c-8.29,34-34.81,135.63-36.05,140.37c3.02-2.7,8.93-4.73,20.03-4.59 c31.77,0.4,64.14,7.79,99.31,22.38c19.84,8.75,30.72,14.56,33.49,19.93l0.42-152.19C208.7,39.01,157.75,10.13,109.76,31.37z" />
                <path fill="#E9A967" d="M153.43,175.77v66.98l-18.11-2.9l-2.44-68.79C132.88,171.06,140.76,172.55,153.43,175.77z" />
                { stateLives > 0 && <path className="head__eyeleft" fill="#353738" d="M128.32,78.08c-0.5,4.54-3.69,7.91-7.13,7.54c-3.44-0.38-5.83-4.37-5.32-8.91c0.5-4.54,3.7-7.92,7.13-7.54 C126.44,69.55,128.82,73.54,128.32,78.08z" />}
                { stateLives > 0 && <path className="head__eyeright" fill="#353738" d="M191.15,88.13c-0.5,4.54-3.7,7.91-7.13,7.53c-3.44-0.38-5.83-4.37-5.32-8.91c0.5-4.54,3.7-7.92,7.13-7.54 C189.27,79.6,191.65,83.58,191.15,88.13z" />}
                <polygon className="head_nose" fill="#353738" points="137.65,99.24 141.78,108.89 132.92,119.13 134.49,120.51 138.04,117.76 136.27,121.89 139.23,121.1 146.31,113.62 152.42,121.7 156.16,122.29 150.25,110.08 157.93,102 156.36,98.26 146.71,106.14 142.37,99.83 140.6,100.82 138.43,97.47 " />
                { stateLives < 1 && <polygon className="head__eyeleft--loser" fill="#353738" points="137.65,99.24 141.78,108.89 132.92,119.13 134.49,120.51 138.04,117.76 136.27,121.89 139.23,121.1 146.31,113.62 152.42,121.7 156.16,122.29 150.25,110.08 157.93,102 156.36,98.26 146.71,106.14 142.37,99.83 140.6,100.82 138.43,97.47 " />}
                { stateLives < 1 && <polygon className="head__eyeright--loser" fill="#353738" points="137.65,99.24 141.78,108.89 132.92,119.13 134.49,120.51 138.04,117.76 136.27,121.89 139.23,121.1 146.31,113.62 152.42,121.7 156.16,122.29 150.25,110.08 157.93,102 156.36,98.26 146.71,106.14 142.37,99.83 140.6,100.82 138.43,97.47 " />}
                <path className="head__mouth" fill="#353738" d="M113.03,117.36c0,0-1.58,22.06,17.93,31.12c19.5,9.06,46.09,9.26,62.83-17.14c-3.15-3.15-1.57-8.07,1.78-5.32 c3.34,2.76,9.06,8.08,7.49,10.25c-1.58,2.17-6.11-1.78-6.11-1.78s-22.45,38.02-64.4,19.11c-22.65-12.01-23.05-26-22.46-38.41 L113.03,117.36z" />
                <path fill="#353738" d="M215.84,169.16c1.73,6.18-1.15,12.38-6.42,13.86c-5.27,1.47-10.95-2.34-12.68-8.51 c-1.72-6.18,1.15-12.38,6.42-13.86C208.44,159.18,214.11,162.99,215.84,169.16z" />
                <path fill="#353738" d="M215.38,169.48c1.32,4.71-0.87,9.44-4.89,10.57c-4.02,1.12-8.35-1.78-9.67-6.49 c-1.32-4.71,0.87-9.44,4.89-10.57C209.73,161.86,214.06,164.77,215.38,169.48z" />
                <path fill="#6D7072" d="M207.48,173.12c-1.29-0.17-2.48,0.74-2.65,2.04c-11.1,84.59-43.53,101.77-68.75,101.16 c-42.09-6.38-41.36-68.49-40.6-83.02c-1.56-0.64-3.09-1.33-4.63-2.05c-0.36,5.03-1.22,22.42,2.52,40.77 c5.89,28.83,20.46,45.77,42.15,48.99c0.1,0.01,0.19,0.02,0.29,0.03c0.5,0.01,0.99,0.02,1.48,0.02c17.34,0,32.16-7.73,44.07-22.99 c13.84-17.73,23.31-45.42,28.16-82.3C209.69,174.48,208.78,173.3,207.48,173.12z" />
            </svg>}
            { stateLives < 6 && <img className="body__spine" src={bodyHuman}/> }
            { stateLives < 5 && <img className="body__handleft" src={handLeft}/> }
            { stateLives < 4 && <img className="body__handright" src={handRight}/> }
            { stateLives < 3 && <img className="body__tailbone" src={tailbone}/> }
            { stateLives < 2 && <img className="body__legleft" src={legLeft}/> }
            { stateLives < 1 && <img className="body__legright" src={legRight}/> }
        </div>
    )
}

export { HumanBody };