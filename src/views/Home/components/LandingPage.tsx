import React, { useState } from 'react'

const LandingPage = () => {


    const [tokenAddress, setTokenAddress] = useState("B5qmy6nXEHtWmhHoGFM3QuH4ofw9n4gD4eVZ8y8VsCx8")

    const [targetValue, setTargetValue] = useState("30")
    const [amountRaised, setAmountRaised] = useState("25")
    const [amountRemaining, setAmountRemaining] = useState("5")

    const [candidateAddress0, setCandidateAddress0] = useState("4LbngVX7kqdzWMZUZJVG3kx2qV5JcgTqTSrNPGxFRY5h")
    const [candidateVotes0, setCandidateVotes0] = useState("10.0")
    const [candidateName0, setCandidateName0] = useState("WORLDVISION")

    const [candidateAddress1, setCandidateAddress1] = useState("4LbngVX7kqdzWMZUZJVG3kx2qV5JcgTqTSrNPGxFRY5h")
    const [candidateVotes1, setCandidateVotes1] = useState("10.0")
    const [candidateName1, setCandidateName1] = useState("PEDULIANAK")

    const [candidateAddress2, setCandidateAddress2] = useState("4LbngVX7kqdzWMZUZJVG3kx2qV5JcgTqTSrNPGxFRY5h")
    const [candidateVotes2, setCandidateVotes2] = useState("10.0")
    const [candidateName2, setCandidateName2] = useState("THEDIGITAL")

    const [candidateAddress3, setCandidateAddress3] = useState("4LbngVX7kqdzWMZUZJVG3kx2qV5JcgTqTSrNPGxFRY5h")
    const [candidateVotes3, setCandidateVotes3] = useState("10.0")
    const [candidateName3, setCandidateName3] = useState("LUNCHBOWL")

    const [candidateAddress4, setCandidateAddress4] = useState("4LbngVX7kqdzWMZUZJVG3kx2qV5JcgTqTSrNPGxFRY5h")
    const [candidateVotes4, setCandidateVotes4] = useState("10.0")
    const [candidateName4, setCandidateName4] = useState("MATWPROJECT")

    return (
        <section className="landing landing--home" id="landing">
            <div className="c-grid">
                <div className="landing__container">
                    <div className="landing__wrapper landing__wrapper-1">
                        <div className="landing__row">
                            <div className="landing__col landing__col-1">
                                <ul className="footer__social">
                                    <li>
                                        <a href="https://discord.gg/4zDw4bGdke" rel="noreferrer" target="_blank">
                                            <img src="img/discord.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://t.me/TheGivingPool" rel="noreferrer" target="_blank">
                                            <img src="img/telegram.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://mobile.twitter.com/givingpool" rel="noreferrer" target="_blank">
                                            <img src="img/twitter.svg" alt="" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/thegivingpool.io/" rel="noreferrer" target="_blank">
                                            <img src="img/instagram.png" srcSet="img/instagram@2x.png 2x" alt="" />
                                        </a>
                                    </li>
                                </ul>
                                <div className="landing__text-wrapper">
                                    <p className="landing__text">The Giving Pool raises funding for worthy and charitable foundations - handpicked by $GIV holders.</p>
                                    <p className="landing__text">$GIV holders can connect their wallets to verify ownership of the $GIV Token. Token holders can participate in the “Pools” voting tally. When the pools “Target Value” is reached, the highest nominated will receive a donation of the pools balance.</p>
                                    <p className="landing__text">Alongside participating in the voting tally, The $GIV Token rewards holders with USDT and enters them in a chance for giveaways.</p>
                                    <p className="landing__text">Learn more about The GIV Platform and participate in the: Donation, Reward & Giveaway aspects – on our Discord & Social Media.</p>
                                </div>
                            </div>
                            <div className="landing__col landing__col-2">
                                <div className="logo logo--landing">
                                    <a className="logo__btn" href="/">
                                        <img src="img/logo-landing.png" srcSet="img/logo-landing@2x.png 2x" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="landing__col landing__col-3">
                                <div className="landing__stat-wrapper">
                                    <p className="landing__stat-title">The Giving Pool</p>
                                    <div className="landing__stat">
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="279" height="276" viewBox="0 0 279 276" fill="none">
                                                <g filter="url(#filter0_f_1063_2701)">
                                                    <ellipse cx="139.597" cy="135" rx="35.2321" ry="31" fill="#F0C777" />
                                                </g>
                                                <g filter="url(#filter1_f_1063_2701)">
                                                    <rect x="101.134" y="148.619" width="78.6309" height="102.586" rx="10" fill="url(#paint0_linear_1063_2701)" />
                                                </g>
                                                <rect x="93" y="121.581" width="94.8993" height="123.262" rx="10" fill="url(#paint1_linear_1063_2701)" />
                                                <path opacity="0.5" d="M174.65 163.331C174.65 179.676 159.524 193.243 140.45 193.243C121.375 193.243 106.25 179.676 106.25 163.331C106.25 146.986 121.375 133.419 140.45 133.419C159.524 133.419 174.65 146.986 174.65 163.331Z" stroke="#F79238" strokeWidth="3" />
                                                <g filter="url(#filter2_f_1063_2701)">
                                                    <mask id="path-5-inside-1_1063_2701" fill="white">
                                                        <path d="M106.133 168.897C105.369 168.897 104.746 169.517 104.784 170.28C105.071 176.008 107.135 181.567 110.766 186.349C114.689 191.515 120.264 195.541 126.788 197.918C133.311 200.296 140.489 200.918 147.414 199.706C154.34 198.494 160.701 195.502 165.694 191.109C170.686 186.716 174.086 181.119 175.464 175.026C176.841 168.932 176.134 162.616 173.432 156.877C170.73 151.137 166.155 146.231 160.284 142.779C154.751 139.526 148.302 137.703 141.667 137.504C140.995 137.484 140.45 138.031 140.45 138.703V138.703C140.45 139.375 140.995 139.918 141.667 139.94C147.754 140.138 153.668 141.818 158.746 144.804C164.162 147.988 168.383 152.513 170.876 157.808C173.369 163.103 174.021 168.93 172.75 174.551C171.479 180.172 168.343 185.335 163.737 189.387C159.131 193.44 153.263 196.2 146.875 197.318C140.486 198.436 133.864 197.862 127.847 195.669C121.829 193.476 116.686 189.762 113.067 184.996C109.74 180.615 107.839 175.526 107.554 170.28C107.513 169.517 106.897 168.897 106.133 168.897V168.897Z" />
                                                    </mask>
                                                    <path d="M106.133 168.897C105.369 168.897 104.746 169.517 104.784 170.28C105.071 176.008 107.135 181.567 110.766 186.349C114.689 191.515 120.264 195.541 126.788 197.918C133.311 200.296 140.489 200.918 147.414 199.706C154.34 198.494 160.701 195.502 165.694 191.109C170.686 186.716 174.086 181.119 175.464 175.026C176.841 168.932 176.134 162.616 173.432 156.877C170.73 151.137 166.155 146.231 160.284 142.779C154.751 139.526 148.302 137.703 141.667 137.504C140.995 137.484 140.45 138.031 140.45 138.703V138.703C140.45 139.375 140.995 139.918 141.667 139.94C147.754 140.138 153.668 141.818 158.746 144.804C164.162 147.988 168.383 152.513 170.876 157.808C173.369 163.103 174.021 168.93 172.75 174.551C171.479 180.172 168.343 185.335 163.737 189.387C159.131 193.44 153.263 196.2 146.875 197.318C140.486 198.436 133.864 197.862 127.847 195.669C121.829 193.476 116.686 189.762 113.067 184.996C109.74 180.615 107.839 175.526 107.554 170.28C107.513 169.517 106.897 168.897 106.133 168.897V168.897Z" stroke="url(#paint2_linear_1063_2701)" strokeWidth="6" mask="url(#path-5-inside-1_1063_2701)" />
                                                </g>
                                                <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="12" fontWeight="bold" letterSpacing="0em">
                                                    <tspan x="133.572" y="164.386">{targetValue}</tspan>
                                                    <tspan x="129.634" y="176.386">SOL</tspan>
                                                </text>
                                                <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0.03em">
                                                    <tspan x="121.022" y="217.431">Target</tspan>
                                                    <tspan x="124.977" y="234.431">Value</tspan>
                                                </text>
                                                <mask id="path-8-inside-2_1063_2701" fill="white">
                                                    <path d="M106.133 163.331C105.369 163.331 104.746 163.951 104.784 164.714C105.071 170.441 107.135 176.001 110.766 180.782C114.689 185.948 120.264 189.974 126.788 192.352C133.311 194.729 140.489 195.351 147.414 194.139C154.34 192.927 160.701 189.935 165.694 185.542C170.686 181.149 174.086 175.552 175.464 169.459C176.841 163.366 176.134 157.05 173.432 151.31C170.73 145.57 166.155 140.664 160.284 137.213C154.751 133.96 148.302 132.136 141.667 131.937C140.995 131.917 140.45 132.464 140.45 133.136V133.136C140.45 133.809 140.995 134.352 141.667 134.373C147.754 134.571 153.668 136.252 158.746 139.237C164.162 142.421 168.383 146.947 170.876 152.242C173.369 157.537 174.021 163.363 172.75 168.984C171.479 174.605 168.343 179.768 163.737 183.821C159.131 187.873 153.263 190.633 146.875 191.751C140.486 192.869 133.864 192.295 127.847 190.102C121.829 187.909 116.686 184.195 113.067 179.43C109.74 175.048 107.839 169.96 107.554 164.714C107.513 163.951 106.897 163.331 106.133 163.331V163.331Z" />
                                                </mask>
                                                <path d="M106.133 163.331C105.369 163.331 104.746 163.951 104.784 164.714C105.071 170.441 107.135 176.001 110.766 180.782C114.689 185.948 120.264 189.974 126.788 192.352C133.311 194.729 140.489 195.351 147.414 194.139C154.34 192.927 160.701 189.935 165.694 185.542C170.686 181.149 174.086 175.552 175.464 169.459C176.841 163.366 176.134 157.05 173.432 151.31C170.73 145.57 166.155 140.664 160.284 137.213C154.751 133.96 148.302 132.136 141.667 131.937C140.995 131.917 140.45 132.464 140.45 133.136V133.136C140.45 133.809 140.995 134.352 141.667 134.373C147.754 134.571 153.668 136.252 158.746 139.237C164.162 142.421 168.383 146.947 170.876 152.242C173.369 157.537 174.021 163.363 172.75 168.984C171.479 174.605 168.343 179.768 163.737 183.821C159.131 187.873 153.263 190.633 146.875 191.751C140.486 192.869 133.864 192.295 127.847 190.102C121.829 187.909 116.686 184.195 113.067 179.43C109.74 175.048 107.839 169.96 107.554 164.714C107.513 163.951 106.897 163.331 106.133 163.331V163.331Z" stroke="url(#paint3_linear_1063_2701)" strokeWidth="6" mask="url(#path-8-inside-2_1063_2701)" />
                                                <mask id="mask0_1063_2701" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="104" y="131" width="73" height="64">
                                                    <mask id="path-9-inside-3_1063_2701" fill="white">
                                                        <path d="M106.133 163.331C105.369 163.331 104.746 163.951 104.784 164.714C105.071 170.441 107.135 176.001 110.766 180.782C114.689 185.948 120.264 189.974 126.788 192.352C133.311 194.729 140.489 195.351 147.414 194.139C154.339 192.927 160.701 189.935 165.693 185.542C170.686 181.149 174.086 175.552 175.464 169.459C176.841 163.366 176.134 157.05 173.432 151.31C170.73 145.57 166.154 140.664 160.283 137.213C154.75 133.96 148.301 132.136 141.667 131.937C140.995 131.917 140.449 132.464 140.449 133.136V133.136C140.449 133.809 140.995 134.352 141.667 134.373C147.754 134.571 153.668 136.252 158.746 139.237C164.162 142.421 168.383 146.947 170.876 152.242C173.368 157.537 174.02 163.363 172.75 168.984C171.479 174.605 168.342 179.768 163.737 183.821C159.131 187.873 153.263 190.633 146.874 191.751C140.486 192.869 133.864 192.295 127.846 190.102C121.829 187.909 116.685 184.195 113.067 179.43C109.74 175.048 107.839 169.96 107.554 164.714C107.512 163.951 106.897 163.331 106.133 163.331V163.331Z" />
                                                    </mask>
                                                    <path d="M106.133 163.331C105.369 163.331 104.746 163.951 104.784 164.714C105.071 170.441 107.135 176.001 110.766 180.782C114.689 185.948 120.264 189.974 126.788 192.352C133.311 194.729 140.489 195.351 147.414 194.139C154.339 192.927 160.701 189.935 165.693 185.542C170.686 181.149 174.086 175.552 175.464 169.459C176.841 163.366 176.134 157.05 173.432 151.31C170.73 145.57 166.154 140.664 160.283 137.213C154.75 133.96 148.301 132.136 141.667 131.937C140.995 131.917 140.449 132.464 140.449 133.136V133.136C140.449 133.809 140.995 134.352 141.667 134.373C147.754 134.571 153.668 136.252 158.746 139.237C164.162 142.421 168.383 146.947 170.876 152.242C173.368 157.537 174.02 163.363 172.75 168.984C171.479 174.605 168.342 179.768 163.737 183.821C159.131 187.873 153.263 190.633 146.874 191.751C140.486 192.869 133.864 192.295 127.846 190.102C121.829 187.909 116.685 184.195 113.067 179.43C109.74 175.048 107.839 169.96 107.554 164.714C107.512 163.951 106.897 163.331 106.133 163.331V163.331Z" stroke="url(#paint4_linear_1063_2701)" strokeWidth="6" mask="url(#path-9-inside-3_1063_2701)" />
                                                </mask>
                                                <g mask="url(#mask0_1063_2701)">
                                                    <g filter="url(#filter3_f_1063_2701)">
                                                        <ellipse cx="106.557" cy="155.776" rx="17.1723" ry="15.1095" fill="#FADD77" />
                                                    </g>
                                                    <g filter="url(#filter4_f_1063_2701)">
                                                        <ellipse cx="106.557" cy="158.162" rx="9.94183" ry="8.74762" fill="#FADD77" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_f_1063_2701" x="0.365234" y="0" width="278.464" height="270" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="52" result="effect1_foregroundBlur_1063_2701" />
                                                    </filter>
                                                    <filter id="filter1_f_1063_2701" x="77.1343" y="124.619" width="126.631" height="150.586" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_1063_2701" />
                                                    </filter>
                                                    <filter id="filter2_f_1063_2701" x="98.7825" y="131.503" width="83.3674" height="74.8062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_1063_2701" />
                                                    </filter>
                                                    <filter id="filter3_f_1063_2701" x="75.3848" y="126.667" width="62.3445" height="58.219" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1063_2701" />
                                                    </filter>
                                                    <filter id="filter4_f_1063_2701" x="82.615" y="135.414" width="47.8835" height="45.4951" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1063_2701" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_1063_2701" x1="155.053" y1="189.653" x2="49.5812" y2="366.886" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.177306" stopColor="#927777" />
                                                        <stop offset="1" stopColor="#000AFF" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1063_2701" x1="158.074" y1="170.886" x2="31.6136" y2="384.333" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.177306" stopColor="#373139" />
                                                        <stop offset="1" stopColor="#F79238" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_1063_2701" x1="125.085" y1="175.259" x2="137.67" y2="136.438" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E67662" />
                                                        <stop offset="0.353335" stopColor="#E67662" />
                                                        <stop offset="1" stopColor="#E67662" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_1063_2701" x1="125.085" y1="169.693" x2="137.67" y2="130.871" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E67662" />
                                                        <stop offset="1" stopColor="#E67662" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint4_linear_1063_2701" x1="125.085" y1="169.693" x2="137.669" y2="130.871" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E67662" />
                                                        <stop offset="1" stopColor="#E67662" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="279" height="276" viewBox="0 0 279 276" fill="none">
                                                <g filter="url(#filter0_f_1063_2714)">
                                                    <ellipse cx="139.386" cy="135" rx="35.2321" ry="31" fill="#E67662" />
                                                </g>
                                                <g filter="url(#filter1_f_1063_2714)">
                                                    <rect x="99.1094" y="148.619" width="78.6309" height="102.586" rx="10" fill="url(#paint0_linear_1063_2714)" />
                                                </g>
                                                <rect x="90.9753" y="121.581" width="94.8993" height="123.262" rx="10" fill="url(#paint1_linear_1063_2714)" />
                                                <path d="M172.625 163.331C172.625 179.676 157.499 193.243 138.425 193.243C119.35 193.243 104.225 179.676 104.225 163.331C104.225 146.986 119.35 133.419 138.425 133.419C157.499 133.419 172.625 146.986 172.625 163.331Z" stroke="#FE7A61" strokeWidth="3" />
                                                <g filter="url(#filter2_f_1063_2714)">
                                                    <mask id="path-5-inside-1_1063_2714" fill="white">
                                                        <path d="M104.108 168.898C103.344 168.898 102.721 169.518 102.759 170.281C103.046 176.008 105.11 181.568 108.741 186.349C112.664 191.515 118.24 195.541 124.763 197.918C131.286 200.296 138.465 200.918 145.39 199.706C152.315 198.494 158.676 195.502 163.669 191.109C168.662 186.716 172.062 181.119 173.439 175.026C174.817 168.933 174.11 162.617 171.408 156.877C168.706 151.137 164.13 146.231 158.259 142.78C152.726 139.527 146.277 137.703 139.642 137.504C138.97 137.484 138.425 138.031 138.425 138.703V138.703C138.425 139.375 138.97 139.918 139.642 139.94C145.729 140.138 151.644 141.819 156.722 144.804C162.137 147.988 166.359 152.514 168.851 157.809C171.344 163.103 171.996 168.93 170.725 174.551C169.455 180.172 166.318 185.335 161.712 189.388C157.106 193.44 151.238 196.2 144.85 197.318C138.462 198.436 131.84 197.862 125.822 195.669C119.804 193.476 114.661 189.762 111.042 184.997C107.715 180.615 105.814 175.527 105.529 170.281C105.488 169.518 104.872 168.898 104.108 168.898V168.898Z" />
                                                    </mask>
                                                    <path d="M104.108 168.898C103.344 168.898 102.721 169.518 102.759 170.281C103.046 176.008 105.11 181.568 108.741 186.349C112.664 191.515 118.24 195.541 124.763 197.918C131.286 200.296 138.465 200.918 145.39 199.706C152.315 198.494 158.676 195.502 163.669 191.109C168.662 186.716 172.062 181.119 173.439 175.026C174.817 168.933 174.11 162.617 171.408 156.877C168.706 151.137 164.13 146.231 158.259 142.78C152.726 139.527 146.277 137.703 139.642 137.504C138.97 137.484 138.425 138.031 138.425 138.703V138.703C138.425 139.375 138.97 139.918 139.642 139.94C145.729 140.138 151.644 141.819 156.722 144.804C162.137 147.988 166.359 152.514 168.851 157.809C171.344 163.103 171.996 168.93 170.725 174.551C169.455 180.172 166.318 185.335 161.712 189.388C157.106 193.44 151.238 196.2 144.85 197.318C138.462 198.436 131.84 197.862 125.822 195.669C119.804 193.476 114.661 189.762 111.042 184.997C107.715 180.615 105.814 175.527 105.529 170.281C105.488 169.518 104.872 168.898 104.108 168.898V168.898Z" stroke="url(#paint2_linear_1063_2714)" strokeWidth="6" mask="url(#path-5-inside-1_1063_2714)" />
                                                </g>
                                                <text fill="#F0C777" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="12" fontWeight="bold" letterSpacing="0em">
                                                    <tspan x="133.183" y="164.386">{amountRaised}</tspan>
                                                    <tspan x="128.061" y="176.386">SOL</tspan>
                                                </text>
                                                <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0.03em">
                                                    <tspan x="115.957" y="217.431">Amount</tspan>
                                                    <tspan x="119.634" y="234.431">Raised</tspan>
                                                </text>
                                                <mask id="path-8-inside-2_1063_2714" fill="white">
                                                    <path d="M121.267 189.48C120.885 190.063 121.077 190.792 121.711 191.088C126.506 193.323 131.822 194.57 137.257 194.726C143.125 194.895 148.95 193.788 154.215 191.504C159.481 189.219 164.024 185.827 167.444 181.628C170.864 177.429 173.054 172.553 173.82 167.431C174.586 162.31 173.905 157.101 171.837 152.266C169.769 147.432 166.378 143.12 161.964 139.714C157.55 136.308 152.249 133.913 146.532 132.74C141.292 131.665 135.85 131.647 130.612 132.681C129.837 132.834 129.36 133.563 129.566 134.24V134.24C129.755 134.859 130.449 135.209 131.158 135.068C136.008 134.103 141.05 134.115 145.904 135.111C151.178 136.193 156.068 138.403 160.14 141.545C164.211 144.687 167.34 148.664 169.247 153.124C171.155 157.584 171.783 162.389 171.077 167.113C170.37 171.838 168.349 176.336 165.195 180.21C162.04 184.083 157.848 187.212 152.991 189.32C148.134 191.428 142.761 192.449 137.348 192.293C132.368 192.149 127.495 191.014 123.096 188.978C122.461 188.684 121.649 188.898 121.267 189.48V189.48Z" />
                                                </mask>
                                                <path d="M121.267 189.48C120.885 190.063 121.077 190.792 121.711 191.088C126.506 193.323 131.822 194.57 137.257 194.726C143.125 194.895 148.95 193.788 154.215 191.504C159.481 189.219 164.024 185.827 167.444 181.628C170.864 177.429 173.054 172.553 173.82 167.431C174.586 162.31 173.905 157.101 171.837 152.266C169.769 147.432 166.378 143.12 161.964 139.714C157.55 136.308 152.249 133.913 146.532 132.74C141.292 131.665 135.85 131.647 130.612 132.681C129.837 132.834 129.36 133.563 129.566 134.24V134.24C129.755 134.859 130.449 135.209 131.158 135.068C136.008 134.103 141.05 134.115 145.904 135.111C151.178 136.193 156.068 138.403 160.14 141.545C164.211 144.687 167.34 148.664 169.247 153.124C171.155 157.584 171.783 162.389 171.077 167.113C170.37 171.838 168.349 176.336 165.195 180.21C162.04 184.083 157.848 187.212 152.991 189.32C148.134 191.428 142.761 192.449 137.348 192.293C132.368 192.149 127.495 191.014 123.096 188.978C122.461 188.684 121.649 188.898 121.267 189.48V189.48Z" stroke="url(#paint3_linear_1063_2714)" strokeWidth="6" mask="url(#path-8-inside-2_1063_2714)" />
                                                <defs>
                                                    <filter id="filter0_f_1063_2714" x="0.153564" y="0" width="278.464" height="270" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="52" result="effect1_foregroundBlur_1063_2714" />
                                                    </filter>
                                                    <filter id="filter1_f_1063_2714" x="75.1094" y="124.619" width="126.631" height="150.586" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_1063_2714" />
                                                    </filter>
                                                    <filter id="filter2_f_1063_2714" x="96.7578" y="131.503" width="83.3674" height="74.8062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_1063_2714" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_1063_2714" x1="153.028" y1="189.653" x2="47.5563" y2="366.886" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.177306" stopColor="#E67662" />
                                                        <stop offset="1" stopColor="#F0C777" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1063_2714" x1="156.049" y1="170.886" x2="29.5889" y2="384.334" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.177306" stopColor="#50261F" />
                                                        <stop offset="1" stopColor="#FF4321" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_1063_2714" x1="138.877" y1="184.405" x2="130.559" y2="161.388" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#B75240" />
                                                        <stop offset="0.457794" stopColor="#F19888" stopOpacity="0" />
                                                        <stop offset="1" stopColor="#E67662" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_1063_2714" x1="137.005" y1="178.22" x2="112.817" y2="145.108" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#F0C777" />
                                                        <stop offset="1" stopColor="#FF7961" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="279" height="275" viewBox="0 0 279 275" fill="none">
                                                <g filter="url(#filter0_f_1063_2725)">
                                                    <ellipse cx="139.232" cy="135" rx="35.2321" ry="31" fill="#85C2D7" />
                                                </g>
                                                <g filter="url(#filter1_f_1063_2725)">
                                                    <rect x="99.9863" y="148" width="77.2833" height="103" rx="10" fill="url(#paint0_linear_1063_2725)" />
                                                </g>
                                                <g filter="url(#filter2_b_1063_2725)">
                                                    <rect x="91.1436" y="120.581" width="94.8993" height="123.262" rx="10" fill="url(#paint1_linear_1063_2725)" />
                                                </g>
                                                <path opacity="0.5" d="M172.793 162.331C172.793 178.676 157.667 192.243 138.593 192.243C119.519 192.243 104.393 178.676 104.393 162.331C104.393 145.986 119.519 132.419 138.593 132.419C157.667 132.419 172.793 145.986 172.793 162.331Z" stroke="#6EA4B7" strokeWidth="3" />
                                                <g filter="url(#filter3_f_1063_2725)">
                                                    <mask id="path-5-inside-1_1063_2725" fill="white">
                                                        <path d="M104.277 167.898C103.512 167.898 102.889 168.518 102.928 169.281C103.214 175.008 105.278 180.568 108.91 185.349C112.832 190.515 118.408 194.541 124.931 196.918C131.455 199.296 138.633 199.918 145.558 198.706C152.483 197.494 158.844 194.502 163.837 190.109C168.83 185.716 172.23 180.119 173.607 174.026C174.985 167.933 174.278 161.617 171.576 155.877C168.874 150.137 164.298 145.231 158.427 141.78C152.894 138.527 146.445 136.703 139.811 136.504C139.138 136.484 138.593 137.031 138.593 137.703V137.703C138.593 138.375 139.138 138.918 139.81 138.94C145.898 139.138 151.812 140.819 156.89 143.804C162.306 146.988 166.527 151.514 169.019 156.809C171.512 162.103 172.164 167.93 170.894 173.551C169.623 179.172 166.486 184.335 161.88 188.388C157.275 192.44 151.407 195.2 145.018 196.318C138.63 197.436 132.008 196.862 125.99 194.669C119.973 192.476 114.829 188.762 111.21 183.997C107.883 179.615 105.982 174.527 105.698 169.281C105.656 168.518 105.041 167.898 104.277 167.898V167.898Z" />
                                                    </mask>
                                                    <path d="M104.277 167.898C103.512 167.898 102.889 168.518 102.928 169.281C103.214 175.008 105.278 180.568 108.91 185.349C112.832 190.515 118.408 194.541 124.931 196.918C131.455 199.296 138.633 199.918 145.558 198.706C152.483 197.494 158.844 194.502 163.837 190.109C168.83 185.716 172.23 180.119 173.607 174.026C174.985 167.933 174.278 161.617 171.576 155.877C168.874 150.137 164.298 145.231 158.427 141.78C152.894 138.527 146.445 136.703 139.811 136.504C139.138 136.484 138.593 137.031 138.593 137.703V137.703C138.593 138.375 139.138 138.918 139.81 138.94C145.898 139.138 151.812 140.819 156.89 143.804C162.306 146.988 166.527 151.514 169.019 156.809C171.512 162.103 172.164 167.93 170.894 173.551C169.623 179.172 166.486 184.335 161.88 188.388C157.275 192.44 151.407 195.2 145.018 196.318C138.63 197.436 132.008 196.862 125.99 194.669C119.973 192.476 114.829 188.762 111.21 183.997C107.883 179.615 105.982 174.527 105.698 169.281C105.656 168.518 105.041 167.898 104.277 167.898V167.898Z" stroke="url(#paint2_linear_1063_2725)" strokeWidth="6" mask="url(#path-5-inside-1_1063_2725)" />
                                                </g>
                                                <text fill="#4C9EBB" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="12" fontWeight="bold" letterSpacing="0em">
                                                    {/* <tspan x="135.834" y="163.386">{amountRemaining}</tspan>
                                                    <tspan x="127.777" y="175.386">SOL</tspan> */}
                                                    <tspan x="133.183" y="164.386">{amountRemaining}</tspan>
                                                    <tspan x="128.061" y="176.386">SOL</tspan>
                                                </text>
                                                <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0.03em">
                                                    <tspan x="115.673" y="216.431">Amount</tspan>
                                                    <tspan x="107.673" y="233.431">Remaining</tspan>
                                                </text>
                                                <mask id="path-8-inside-2_1063_2725" fill="white">
                                                    <path d="M104.277 162.331C103.512 162.331 102.889 162.951 102.928 163.714C103.214 169.442 105.278 175.001 108.91 179.783C112.832 184.948 118.408 188.974 124.931 191.352C131.455 193.729 138.633 194.351 145.558 193.139C152.483 191.927 158.844 188.936 163.837 184.543C168.83 180.15 172.23 174.552 173.607 168.459C174.985 162.366 174.278 156.05 171.576 150.31C168.874 144.57 164.298 139.665 158.427 136.213C152.894 132.96 146.445 131.136 139.811 130.937C139.138 130.917 138.593 131.464 138.593 132.136V132.136C138.593 132.809 139.138 133.352 139.81 133.374C145.898 133.572 151.812 135.252 156.89 138.237C162.306 141.421 166.527 145.947 169.019 151.242C171.512 156.537 172.164 162.363 170.894 167.984C169.623 173.605 166.486 178.768 161.88 182.821C157.275 186.873 151.407 189.633 145.018 190.751C138.63 191.869 132.008 191.296 125.99 189.102C119.973 186.909 114.829 183.195 111.21 178.43C107.883 174.049 105.982 168.96 105.698 163.714C105.656 162.951 105.041 162.331 104.277 162.331V162.331Z" />
                                                </mask>
                                                <path d="M104.277 162.331C103.512 162.331 102.889 162.951 102.928 163.714C103.214 169.442 105.278 175.001 108.91 179.783C112.832 184.948 118.408 188.974 124.931 191.352C131.455 193.729 138.633 194.351 145.558 193.139C152.483 191.927 158.844 188.936 163.837 184.543C168.83 180.15 172.23 174.552 173.607 168.459C174.985 162.366 174.278 156.05 171.576 150.31C168.874 144.57 164.298 139.665 158.427 136.213C152.894 132.96 146.445 131.136 139.811 130.937C139.138 130.917 138.593 131.464 138.593 132.136V132.136C138.593 132.809 139.138 133.352 139.81 133.374C145.898 133.572 151.812 135.252 156.89 138.237C162.306 141.421 166.527 145.947 169.019 151.242C171.512 156.537 172.164 162.363 170.894 167.984C169.623 173.605 166.486 178.768 161.88 182.821C157.275 186.873 151.407 189.633 145.018 190.751C138.63 191.869 132.008 191.296 125.99 189.102C119.973 186.909 114.829 183.195 111.21 178.43C107.883 174.049 105.982 168.96 105.698 163.714C105.656 162.951 105.041 162.331 104.277 162.331V162.331Z" stroke="url(#paint3_linear_1063_2725)" strokeWidth="6" mask="url(#path-8-inside-2_1063_2725)" />
                                                <mask id="mask0_1063_2725" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="102" y="130" width="73" height="64">
                                                    <mask id="path-9-inside-3_1063_2725" fill="white">
                                                        <path d="M110.453 145.05C109.826 144.665 108.945 144.819 108.515 145.411C104.494 150.944 102.539 157.458 102.946 164.038C103.379 171.041 106.464 177.715 111.708 182.997C116.952 188.279 124.055 191.865 131.884 193.183C139.713 194.501 147.819 193.476 154.909 190.271C161.999 187.065 167.666 181.864 171.007 175.496C174.348 169.128 175.17 161.96 173.344 155.133C171.517 148.305 167.146 142.213 160.927 137.825C155.077 133.697 147.909 131.302 140.444 130.961C139.673 130.926 139.021 131.497 139.011 132.188V132.188C139.002 132.841 139.572 133.36 140.299 133.393C147.186 133.707 153.799 135.917 159.196 139.724C164.933 143.772 168.965 149.393 170.65 155.69C172.335 161.988 171.576 168.601 168.495 174.476C165.413 180.35 160.185 185.148 153.644 188.105C147.104 191.062 139.627 192.008 132.404 190.792C125.182 189.576 118.63 186.268 113.792 181.396C108.954 176.523 106.109 170.366 105.709 163.905C105.336 157.869 107.118 151.892 110.786 146.806C111.214 146.212 111.079 145.435 110.453 145.05V145.05Z" />
                                                    </mask>
                                                    <path d="M110.453 145.05C109.826 144.665 108.945 144.819 108.515 145.411C104.494 150.944 102.539 157.458 102.946 164.038C103.379 171.041 106.464 177.715 111.708 182.997C116.952 188.279 124.055 191.865 131.884 193.183C139.713 194.501 147.819 193.476 154.909 190.271C161.999 187.065 167.666 181.864 171.007 175.496C174.348 169.128 175.17 161.96 173.344 155.133C171.517 148.305 167.146 142.213 160.927 137.825C155.077 133.697 147.909 131.302 140.444 130.961C139.673 130.926 139.021 131.497 139.011 132.188V132.188C139.002 132.841 139.572 133.36 140.299 133.393C147.186 133.707 153.799 135.917 159.196 139.724C164.933 143.772 168.965 149.393 170.65 155.69C172.335 161.988 171.576 168.601 168.495 174.476C165.413 180.35 160.185 185.148 153.644 188.105C147.104 191.062 139.627 192.008 132.404 190.792C125.182 189.576 118.63 186.268 113.792 181.396C108.954 176.523 106.109 170.366 105.709 163.905C105.336 157.869 107.118 151.892 110.786 146.806C111.214 146.212 111.079 145.435 110.453 145.05V145.05Z" stroke="url(#paint4_linear_1063_2725)" strokeWidth="6" mask="url(#path-9-inside-3_1063_2725)" />
                                                </mask>
                                                <g mask="url(#mask0_1063_2725)">
                                                    <g filter="url(#filter4_f_1063_2725)">
                                                        <ellipse cx="104.7" cy="154.776" rx="17.1723" ry="15.1095" fill="white" />
                                                    </g>
                                                    <g filter="url(#filter5_f_1063_2725)">
                                                        <ellipse cx="104.701" cy="157.162" rx="9.94183" ry="8.74762" fill="#92E3FF" />
                                                    </g>
                                                </g>
                                                <defs>
                                                    <filter id="filter0_f_1063_2725" x="0" y="0" width="278.464" height="270" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="52" result="effect1_foregroundBlur_1063_2725" />
                                                    </filter>
                                                    <filter id="filter1_f_1063_2725" x="75.9863" y="124" width="125.283" height="151" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_1063_2725" />
                                                    </filter>
                                                    <filter id="filter2_b_1063_2725" x="87.1436" y="116.581" width="102.899" height="131.262" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1063_2725" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1063_2725" result="shape" />
                                                    </filter>
                                                    <filter id="filter3_f_1063_2725" x="96.926" y="130.503" width="83.3674" height="74.8062" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="3" result="effect1_foregroundBlur_1063_2725" />
                                                    </filter>
                                                    <filter id="filter4_f_1063_2725" x="73.5281" y="125.667" width="62.3445" height="58.219" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1063_2725" />
                                                    </filter>
                                                    <filter id="filter5_f_1063_2725" x="80.7588" y="134.414" width="47.8838" height="45.4954" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                        <feGaussianBlur stdDeviation="7" result="effect1_foregroundBlur_1063_2725" />
                                                    </filter>
                                                    <linearGradient id="paint0_linear_1063_2725" x1="152.981" y1="189.2" x2="46.02" y2="365.145" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.177306" stopColor="#85C2D7" />
                                                        <stop offset="1" stopColor="#2D2DDA" />
                                                    </linearGradient>
                                                    <linearGradient id="paint1_linear_1063_2725" x1="111.931" y1="169.886" x2="273.26" y2="169.886" gradientUnits="userSpaceOnUse">
                                                        <stop offset="0.0284675" stopColor="#211530" />
                                                        <stop offset="0.900819" stopColor="#17282E" stopOpacity="0.04" />
                                                    </linearGradient>
                                                    <linearGradient id="paint2_linear_1063_2725" x1="146.727" y1="188.176" x2="140.733" y2="152.11" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#4C9EBB" />
                                                        <stop offset="0.353335" stopColor="#4C9EBB" />
                                                        <stop offset="0.823484" stopColor="#4C9EBB" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint3_linear_1063_2725" x1="123.229" y1="168.693" x2="135.813" y2="129.871" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#56D4FF" />
                                                        <stop offset="1" stopColor="#85C2D7" stopOpacity="0" />
                                                    </linearGradient>
                                                    <linearGradient id="paint4_linear_1063_2725" x1="121.856" y1="159.811" x2="156.13" y2="132.674" gradientUnits="userSpaceOnUse">
                                                        <stop stopColor="#E67662" />
                                                        <stop offset="1" stopColor="#E67662" stopOpacity="0" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__wrapper landing__wrapper-5">
                        <div className="landing__vote-wrapper">
                            <p className="landing__vote-title">Enter your vote</p>
                            <div className="landing__vote">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="264" viewBox="0 0 184 264" fill="none">
                                        <g opacity="0.35" filter="url(#filter0_f_1063_5351)">
                                            <path d="M30.0438 38.2812C30.0438 33.863 33.6255 30.2812 38.0438 30.2812H145.29C149.708 30.2812 153.29 33.863 153.29 38.2812V226C153.29 230.418 149.708 234 145.29 234H38.0438C33.6255 234 30.0438 230.418 30.0438 226V38.2812Z" fill="black" />
                                        </g>
                                        <path d="M14 30C14 25.5817 17.5817 22 22 22H161.334C165.752 22 169.334 25.5817 169.334 30V217.719C169.334 222.137 165.752 225.719 161.334 225.719H22C17.5817 225.719 14 222.137 14 217.719V30Z" fill="#1C1C1E" />
                                        <path d="M18.4528 22L168.722 83.1676L166.484 111.263L16.4146 48.292L18.4528 22Z" fill="url(#paint0_linear_1063_5351)" fillOpacity="0.3" />
                                        <path d="M18.4579 28.384L168.728 89.5516L166.489 111.299L16.4197 48.3284L18.4579 28.384Z" fill="url(#paint1_linear_1063_5351)" fillOpacity="0.2" />
                                        <path d="M57.6678 90.365L72.9096 95.3043L72.9655 72.1295L57.6678 65.6343V90.365Z" fill="url(#paint2_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M72.9657 96.614L49.1464 109.424V61.9976L72.9657 72.132V96.614Z" fill="url(#paint3_linear_1063_5351)" fillOpacity="0.8" />
                                        <g style={{ mixBlendMode: "lighten" }}>
                                            <ellipse cx="79.1898" cy="113.853" rx="65.1898" ry="28.4133" fill="url(#paint4_radial_1063_5351)" fillOpacity="0.6" />
                                        </g>
                                        <path d="M57.669 90.3667L49.1464 109.424V61.9976L57.669 65.6329V90.3667Z" fill="url(#paint5_linear_1063_5351)" />
                                        <path d="M69.5955 51.0017L72.7655 35.7053L103.51 35.7684L82.3772 52.0397L69.5955 51.0017Z" fill="url(#paint6_linear_1063_5351)" fillOpacity="0.8" />
                                        <g opacity="0.7">
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint7_linear_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint8_radial_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint9_linear_1063_5351)" />
                                        </g>
                                        <path d="M69.5946 51.0017L84.8354 55.9413L72.9668 72.1315L57.67 65.6329L69.5946 51.0017Z" fill="url(#paint10_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M82.2375 75.9836L97.5972 82.3333L85.6714 95.9222L71.1659 90.1271L82.2375 75.9836Z" fill="url(#paint11_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M69.5946 51.002L84.8354 55.9416L97.6178 56.9797L82.376 52.0395L69.5946 51.002Z" fill="url(#paint12_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M57.6643 90.3629L72.9681 96.6178L85.6884 95.9301L71.1671 90.1282L57.6643 90.3629Z" fill="url(#paint13_linear_1063_5351)" />
                                        <path d="M84.8754 56.0104L72.7659 35.7053L49.1464 61.9973L72.9682 72.1295L84.8754 56.0104Z" fill="url(#paint14_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5892 82.3386L103.449 84.8091V35.6694L97.6042 56.9843L97.5892 82.3386Z" fill="url(#paint15_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M72.9657 96.6157L49.1464 109.424L79.9996 113.463L85.6647 95.9214L72.9657 96.6157Z" fill="url(#paint16_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5941 82.3335L103.447 84.8085L79.9994 113.463L85.6645 95.9213L97.5941 82.3335Z" fill="url(#paint17_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint18_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint19_linear_1063_5351)" fillOpacity="0.6" />
                                        <path d="M49.186 109.46L57.6787 90.345L72.9657 96.6159L49.186 109.46Z" fill="url(#paint20_linear_1063_5351)" />
                                        <path d="M18.6925 74.5255L168.962 135.693L166.484 111.295L16.4144 48.3237L18.6925 74.5255Z" fill="url(#paint21_linear_1063_5351)" fillOpacity="0.4" />
                                        <path d="M18.6925 68.773L168.962 129.941L166.484 111.295L16.4144 48.3237L18.6925 68.773Z" fill="url(#paint22_linear_1063_5351)" fillOpacity="0.3" />
                                        <g opacity="0.7">
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint23_linear_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint24_radial_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint25_linear_1063_5351)" />
                                        </g>
                                        <path d="M169.334 217.719C169.334 222.137 165.752 225.719 161.334 225.719L22 225.719C17.5817 225.719 14 222.137 14 217.719L14 125.234C14 120.816 17.5817 117.234 22 117.234L161.334 117.234C165.752 117.234 169.334 120.816 169.334 125.234L169.334 217.719Z" fill="#1C1C1E" />
                                        <path d="M168.834 125.235C168.834 121.092 165.476 117.735 161.334 117.735L22 117.735C17.8578 117.735 14.5 121.092 14.5 125.235L14.5 217.719C14.5 221.861 17.8579 225.219 22 225.219L161.334 225.219C165.476 225.219 168.834 221.861 168.834 217.719L168.834 125.235Z" stroke="url(#paint26_linear_1063_5351)" />
                                        <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0em">
                                            <tspan x="27.3779" y="149.747">{candidateName0}</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="6" letterSpacing="0.35em">
                                            <tspan x="27.3779" y="134.941">CANDIDATE</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="19.5742" y="173.003">DESCRIPTION</tspan>
                                        </text>
                                        <g opacity="0.5" filter="url(#filter1_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.91706" ry="0.414062" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter2_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.1878" ry="2.07031" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter3_f_1063_5351)">
                                            <ellipse cx="22.7513" cy="117.649" rx="1.45853" ry="1.38021" fill="#EFBB8A" />
                                        </g>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="106.199" y="144.446">VOTES</tspan>
                                        </text>
                                        <g filter="url(#filter4_d_1063_5351)">
                                            <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="14" fontWeight="900" letterSpacing="0em">
                                                <tspan x="110.982" y="162.917">{candidateVotes0}</tspan>
                                            </text>
                                        </g>
                                        <g style={{ mixBlendMode: "overlay" }}>
                                            <rect x="118.285" y="94.0471" width="2.1878" height="16.5625" rx="1.0939" fill="#F0C777" />
                                            <rect x="124.119" y="104.813" width="2.1878" height="5.79687" rx="1.0939" fill="#F0C777" />
                                            <rect x="129.953" y="101.5" width="2.1878" height="9.10937" rx="1.0939" fill="#F0C777" />
                                            <rect x="135.787" y="95.7034" width="2.1878" height="14.9062" rx="1.0939" fill="#F0C777" />
                                            <rect x="141.621" y="90.7344" width="2.1878" height="19.875" rx="1.0939" fill="#F0C777" />
                                            <rect x="147.288" y="98.2026" width="2.38851" height="12.7866" rx="1.19426" fill="#F0C777" />
                                            <rect x="153.29" y="94.875" width="2.1878" height="15.7344" rx="1.0939" fill="#F0C777" />
                                        </g>
                                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="8" letterSpacing="0.02em">
                                            <tspan x="35.6067" y="193.109">ONEPOIRNGPOEITGWP5Kewd</tspan>
                                            <tspan x="35.6067" y="203.109">efefe</tspan>
                                            <tspan x="35.6067" y="213.109">STKGJEPKTJG</tspan>
                                        </text>
                                        <g filter="url(#filter5_d_1063_5351)">
                                            <path d="M30.5059 190.277C30.5059 192.782 28.6343 194.746 26.4048 194.746C24.1754 194.746 22.3038 192.782 22.3038 190.277C22.3038 187.772 24.1754 185.809 26.4048 185.809C28.6343 185.809 30.5059 187.772 30.5059 190.277Z" stroke="#E67662" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_1063_5351" x="0.0438232" y="0.28125" width="183.246" height="263.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter1_f_1063_5351" x="18.8341" y="116.235" width="7.83411" height="2.82812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter2_f_1063_5351" x="17.5634" y="112.578" width="10.3756" height="10.1406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter3_f_1063_5351" x="20.2927" y="115.268" width="4.91711" height="4.7605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter4_d_1063_5351" x="105.122" y="146.304" width="40.04" height="22.5701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="3" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <filter id="filter5_d_1063_5351" x="17.8038" y="181.309" width="17.202" height="17.9375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1063_5351" x1="38.3336" y1="39.9937" x2="145.587" y2="109.63" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#9492ED" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#7674EC" />
                                                <stop offset="1" stopColor="#817FDF" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1063_5351" x1="38.3387" y1="40.0302" x2="145.592" y2="109.667" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1063_5351" x1="57.6678" y1="71.0447" x2="73.3281" y2="72.4907" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#548DD1" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1063_5351" x1="46.4465" y1="81.9588" x2="80.5636" y2="90.3526" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#2B79ED" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.1898 113.853) rotate(90) scale(28.4133 65.1898)">
                                                <stop offset="0.0729167" stopColor="white" />
                                                <stop offset="0.34375" stopColor="#FF7373" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="#0E7DFF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint5_linear_1063_5351" x1="57.669" y1="64.3582" x2="54.432" y2="101.532" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2295D6" />
                                                <stop offset="1" stopColor="#2249D6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_1063_5351" x1="70.6404" y1="39.431" x2="80.8523" y2="55.0933" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.534769" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="0.716558" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_1063_5351" x1="83.1759" y1="57.0117" x2="43.4715" y2="87.1088" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#324BCC" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint8_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4219 100.525) rotate(-90) scale(30.372 19.3638)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint9_linear_1063_5351" x1="57.6679" y1="85.921" x2="68.9298" y2="71.2174" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint10_linear_1063_5351" x1="64.9929" y1="56.2139" x2="77.0283" y2="64.8435" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint11_linear_1063_5351" x1="96.625" y1="83.3117" x2="71.0196" y2="92.835" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="1" stopColor="#E39DE5" />
                                            </linearGradient>
                                            <linearGradient id="paint12_linear_1063_5351" x1="79.7268" y1="51.7819" x2="79.4853" y2="55.908" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint13_linear_1063_5351" x1="67.7973" y1="90.7325" x2="67.5558" y2="94.8586" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint14_linear_1063_5351" x1="57.3671" y1="51.8646" x2="72.9794" y2="69.648" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0729167" stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#D22828" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint15_linear_1063_5351" x1="104.618" y1="35.6694" x2="117.656" y2="42.1091" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00889157" stopColor="#1D2A9B" stopOpacity="0.8" />
                                                <stop offset="0.645598" stopColor="#AF2929" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint16_linear_1063_5351" x1="49.1464" y1="107.127" x2="88.1882" y2="100.568" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#50111D" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint17_linear_1063_5351" x1="98.863" y1="93.1217" x2="90.8386" y2="88.3959" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.539474" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint18_linear_1063_5351" x1="102.546" y1="42.8766" x2="91.4731" y2="60.4757" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0A3892" />
                                                <stop offset="0.536458" stopColor="#29B2ED" stopOpacity="0.8" />
                                                <stop offset="0.967948" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint19_linear_1063_5351" x1="97.2645" y1="58.0661" x2="88.6797" y2="41.1541" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF439D" />
                                                <stop offset="1" stopColor="#FF43D6" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint20_linear_1063_5351" x1="56.0201" y1="89.3712" x2="71.8281" y2="101.421" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D2549" />
                                                <stop offset="1" stopColor="#FF93E1" stopOpacity="0.6" />
                                            </linearGradient>
                                            <linearGradient id="paint21_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint22_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#8A88EC" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint23_linear_1063_5351" x1="98.4157" y1="61.9505" x2="58.7423" y2="91.9622" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0B1135" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint24_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.6907 105.455) rotate(-90) scale(30.3652 19.3196)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint25_linear_1063_5351" x1="77.0095" y1="91.6714" x2="86.2512" y2="78.5094" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint26_linear_1063_5351" x1="45.3584" y1="104.813" x2="73.3317" y2="184.368" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0749607" stopColor="#9F4E03" />
                                                <stop offset="0.421149" stopColor="#465558" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="264" viewBox="0 0 184 264" fill="none">
                                        <g opacity="0.35" filter="url(#filter0_f_1063_5351)">
                                            <path d="M30.0438 38.2812C30.0438 33.863 33.6255 30.2812 38.0438 30.2812H145.29C149.708 30.2812 153.29 33.863 153.29 38.2812V226C153.29 230.418 149.708 234 145.29 234H38.0438C33.6255 234 30.0438 230.418 30.0438 226V38.2812Z" fill="black" />
                                        </g>
                                        <path d="M14 30C14 25.5817 17.5817 22 22 22H161.334C165.752 22 169.334 25.5817 169.334 30V217.719C169.334 222.137 165.752 225.719 161.334 225.719H22C17.5817 225.719 14 222.137 14 217.719V30Z" fill="#1C1C1E" />
                                        <path d="M18.4528 22L168.722 83.1676L166.484 111.263L16.4146 48.292L18.4528 22Z" fill="url(#paint0_linear_1063_5351)" fillOpacity="0.3" />
                                        <path d="M18.4579 28.384L168.728 89.5516L166.489 111.299L16.4197 48.3284L18.4579 28.384Z" fill="url(#paint1_linear_1063_5351)" fillOpacity="0.2" />
                                        <path d="M57.6678 90.365L72.9096 95.3043L72.9655 72.1295L57.6678 65.6343V90.365Z" fill="url(#paint2_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M72.9657 96.614L49.1464 109.424V61.9976L72.9657 72.132V96.614Z" fill="url(#paint3_linear_1063_5351)" fillOpacity="0.8" />
                                        <g style={{
                                            mixBlendMode: "lighten"
                                        }} >
                                            <ellipse cx="79.1898" cy="113.853" rx="65.1898" ry="28.4133" fill="url(#paint4_radial_1063_5351)" fillOpacity="0.6" />
                                        </g>
                                        <path d="M57.669 90.3667L49.1464 109.424V61.9976L57.669 65.6329V90.3667Z" fill="url(#paint5_linear_1063_5351)" />
                                        <path d="M69.5955 51.0017L72.7655 35.7053L103.51 35.7684L82.3772 52.0397L69.5955 51.0017Z" fill="url(#paint6_linear_1063_5351)" fillOpacity="0.8" />
                                        <g opacity="0.7">
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint7_linear_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint8_radial_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint9_linear_1063_5351)" />
                                        </g>
                                        <path d="M69.5946 51.0017L84.8354 55.9413L72.9668 72.1315L57.67 65.6329L69.5946 51.0017Z" fill="url(#paint10_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M82.2375 75.9836L97.5972 82.3333L85.6714 95.9222L71.1659 90.1271L82.2375 75.9836Z" fill="url(#paint11_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M69.5946 51.002L84.8354 55.9416L97.6178 56.9797L82.376 52.0395L69.5946 51.002Z" fill="url(#paint12_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M57.6643 90.3629L72.9681 96.6178L85.6884 95.9301L71.1671 90.1282L57.6643 90.3629Z" fill="url(#paint13_linear_1063_5351)" />
                                        <path d="M84.8754 56.0104L72.7659 35.7053L49.1464 61.9973L72.9682 72.1295L84.8754 56.0104Z" fill="url(#paint14_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5892 82.3386L103.449 84.8091V35.6694L97.6042 56.9843L97.5892 82.3386Z" fill="url(#paint15_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M72.9657 96.6157L49.1464 109.424L79.9996 113.463L85.6647 95.9214L72.9657 96.6157Z" fill="url(#paint16_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5941 82.3335L103.447 84.8085L79.9994 113.463L85.6645 95.9213L97.5941 82.3335Z" fill="url(#paint17_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint18_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint19_linear_1063_5351)" fillOpacity="0.6" />
                                        <path d="M49.186 109.46L57.6787 90.345L72.9657 96.6159L49.186 109.46Z" fill="url(#paint20_linear_1063_5351)" />
                                        <path d="M18.6925 74.5255L168.962 135.693L166.484 111.295L16.4144 48.3237L18.6925 74.5255Z" fill="url(#paint21_linear_1063_5351)" fillOpacity="0.4" />
                                        <path d="M18.6925 68.773L168.962 129.941L166.484 111.295L16.4144 48.3237L18.6925 68.773Z" fill="url(#paint22_linear_1063_5351)" fillOpacity="0.3" />
                                        <g opacity="0.7">
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint23_linear_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint24_radial_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint25_linear_1063_5351)" />
                                        </g>
                                        <path d="M169.334 217.719C169.334 222.137 165.752 225.719 161.334 225.719L22 225.719C17.5817 225.719 14 222.137 14 217.719L14 125.234C14 120.816 17.5817 117.234 22 117.234L161.334 117.234C165.752 117.234 169.334 120.816 169.334 125.234L169.334 217.719Z" fill="#1C1C1E" />
                                        <path d="M168.834 125.235C168.834 121.092 165.476 117.735 161.334 117.735L22 117.735C17.8578 117.735 14.5 121.092 14.5 125.235L14.5 217.719C14.5 221.861 17.8579 225.219 22 225.219L161.334 225.219C165.476 225.219 168.834 221.861 168.834 217.719L168.834 125.235Z" stroke="url(#paint26_linear_1063_5351)" />
                                        <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0em">
                                            <tspan x="27.3779" y="149.747">{candidateName1}</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="6" letterSpacing="0.35em">
                                            <tspan x="27.3779" y="134.941">CANDIDATE</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="19.5742" y="173.003">DESCRIPTION</tspan>
                                        </text>
                                        <g opacity="0.5" filter="url(#filter1_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.91706" ry="0.414062" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter2_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.1878" ry="2.07031" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter3_f_1063_5351)">
                                            <ellipse cx="22.7513" cy="117.649" rx="1.45853" ry="1.38021" fill="#EFBB8A" />
                                        </g>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="106.199" y="144.446">VOTES</tspan>
                                        </text>
                                        <g filter="url(#filter4_d_1063_5351)">
                                            <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="14" fontWeight="900" letterSpacing="0em">
                                                <tspan x="110.982" y="162.917">{candidateVotes1}</tspan>
                                            </text>
                                        </g>
                                        <g style={{ mixBlendMode: "overlay" }}>
                                            <rect x="118.285" y="94.0471" width="2.1878" height="16.5625" rx="1.0939" fill="#F0C777" />
                                            <rect x="124.119" y="104.813" width="2.1878" height="5.79687" rx="1.0939" fill="#F0C777" />
                                            <rect x="129.953" y="101.5" width="2.1878" height="9.10937" rx="1.0939" fill="#F0C777" />
                                            <rect x="135.787" y="95.7034" width="2.1878" height="14.9062" rx="1.0939" fill="#F0C777" />
                                            <rect x="141.621" y="90.7344" width="2.1878" height="19.875" rx="1.0939" fill="#F0C777" />
                                            <rect x="147.288" y="98.2026" width="2.38851" height="12.7866" rx="1.19426" fill="#F0C777" />
                                            <rect x="153.29" y="94.875" width="2.1878" height="15.7344" rx="1.0939" fill="#F0C777" />
                                        </g>
                                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="8" letterSpacing="0.02em">
                                            <tspan x="35.6067" y="193.109">ONEPOIRNGPOEITGWP5Kewd</tspan>
                                            <tspan x="35.6067" y="203.109">efefe</tspan>
                                            <tspan x="35.6067" y="213.109">STKGJEPKTJG</tspan>
                                        </text>
                                        <g filter="url(#filter5_d_1063_5351)">
                                            <path d="M30.5059 190.277C30.5059 192.782 28.6343 194.746 26.4048 194.746C24.1754 194.746 22.3038 192.782 22.3038 190.277C22.3038 187.772 24.1754 185.809 26.4048 185.809C28.6343 185.809 30.5059 187.772 30.5059 190.277Z" stroke="#E67662" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_1063_5351" x="0.0438232" y="0.28125" width="183.246" height="263.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter1_f_1063_5351" x="18.8341" y="116.235" width="7.83411" height="2.82812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter2_f_1063_5351" x="17.5634" y="112.578" width="10.3756" height="10.1406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter3_f_1063_5351" x="20.2927" y="115.268" width="4.91711" height="4.7605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter4_d_1063_5351" x="105.122" y="146.304" width="40.04" height="22.5701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="3" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <filter id="filter5_d_1063_5351" x="17.8038" y="181.309" width="17.202" height="17.9375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1063_5351" x1="38.3336" y1="39.9937" x2="145.587" y2="109.63" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#9492ED" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#7674EC" />
                                                <stop offset="1" stopColor="#817FDF" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1063_5351" x1="38.3387" y1="40.0302" x2="145.592" y2="109.667" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1063_5351" x1="57.6678" y1="71.0447" x2="73.3281" y2="72.4907" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#548DD1" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1063_5351" x1="46.4465" y1="81.9588" x2="80.5636" y2="90.3526" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#2B79ED" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.1898 113.853) rotate(90) scale(28.4133 65.1898)">
                                                <stop offset="0.0729167" stopColor="white" />
                                                <stop offset="0.34375" stopColor="#FF7373" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="#0E7DFF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint5_linear_1063_5351" x1="57.669" y1="64.3582" x2="54.432" y2="101.532" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2295D6" />
                                                <stop offset="1" stopColor="#2249D6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_1063_5351" x1="70.6404" y1="39.431" x2="80.8523" y2="55.0933" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.534769" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="0.716558" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_1063_5351" x1="83.1759" y1="57.0117" x2="43.4715" y2="87.1088" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#324BCC" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint8_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4219 100.525) rotate(-90) scale(30.372 19.3638)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint9_linear_1063_5351" x1="57.6679" y1="85.921" x2="68.9298" y2="71.2174" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint10_linear_1063_5351" x1="64.9929" y1="56.2139" x2="77.0283" y2="64.8435" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint11_linear_1063_5351" x1="96.625" y1="83.3117" x2="71.0196" y2="92.835" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="1" stopColor="#E39DE5" />
                                            </linearGradient>
                                            <linearGradient id="paint12_linear_1063_5351" x1="79.7268" y1="51.7819" x2="79.4853" y2="55.908" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint13_linear_1063_5351" x1="67.7973" y1="90.7325" x2="67.5558" y2="94.8586" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint14_linear_1063_5351" x1="57.3671" y1="51.8646" x2="72.9794" y2="69.648" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0729167" stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#D22828" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint15_linear_1063_5351" x1="104.618" y1="35.6694" x2="117.656" y2="42.1091" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00889157" stopColor="#1D2A9B" stopOpacity="0.8" />
                                                <stop offset="0.645598" stopColor="#AF2929" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint16_linear_1063_5351" x1="49.1464" y1="107.127" x2="88.1882" y2="100.568" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#50111D" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint17_linear_1063_5351" x1="98.863" y1="93.1217" x2="90.8386" y2="88.3959" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.539474" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint18_linear_1063_5351" x1="102.546" y1="42.8766" x2="91.4731" y2="60.4757" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0A3892" />
                                                <stop offset="0.536458" stopColor="#29B2ED" stopOpacity="0.8" />
                                                <stop offset="0.967948" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint19_linear_1063_5351" x1="97.2645" y1="58.0661" x2="88.6797" y2="41.1541" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF439D" />
                                                <stop offset="1" stopColor="#FF43D6" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint20_linear_1063_5351" x1="56.0201" y1="89.3712" x2="71.8281" y2="101.421" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D2549" />
                                                <stop offset="1" stopColor="#FF93E1" stopOpacity="0.6" />
                                            </linearGradient>
                                            <linearGradient id="paint21_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint22_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#8A88EC" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint23_linear_1063_5351" x1="98.4157" y1="61.9505" x2="58.7423" y2="91.9622" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0B1135" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint24_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.6907 105.455) rotate(-90) scale(30.3652 19.3196)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint25_linear_1063_5351" x1="77.0095" y1="91.6714" x2="86.2512" y2="78.5094" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint26_linear_1063_5351" x1="45.3584" y1="104.813" x2="73.3317" y2="184.368" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0749607" stopColor="#9F4E03" />
                                                <stop offset="0.421149" stopColor="#465558" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="264" viewBox="0 0 184 264" fill="none">
                                        <g opacity="0.35" filter="url(#filter0_f_1063_5351)">
                                            <path d="M30.0438 38.2812C30.0438 33.863 33.6255 30.2812 38.0438 30.2812H145.29C149.708 30.2812 153.29 33.863 153.29 38.2812V226C153.29 230.418 149.708 234 145.29 234H38.0438C33.6255 234 30.0438 230.418 30.0438 226V38.2812Z" fill="black" />
                                        </g>
                                        <path d="M14 30C14 25.5817 17.5817 22 22 22H161.334C165.752 22 169.334 25.5817 169.334 30V217.719C169.334 222.137 165.752 225.719 161.334 225.719H22C17.5817 225.719 14 222.137 14 217.719V30Z" fill="#1C1C1E" />
                                        <path d="M18.4528 22L168.722 83.1676L166.484 111.263L16.4146 48.292L18.4528 22Z" fill="url(#paint0_linear_1063_5351)" fillOpacity="0.3" />
                                        <path d="M18.4579 28.384L168.728 89.5516L166.489 111.299L16.4197 48.3284L18.4579 28.384Z" fill="url(#paint1_linear_1063_5351)" fillOpacity="0.2" />
                                        <path d="M57.6678 90.365L72.9096 95.3043L72.9655 72.1295L57.6678 65.6343V90.365Z" fill="url(#paint2_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M72.9657 96.614L49.1464 109.424V61.9976L72.9657 72.132V96.614Z" fill="url(#paint3_linear_1063_5351)" fillOpacity="0.8" />
                                        <g style={{ mixBlendMode: "lighten" }}>
                                            <ellipse cx="79.1898" cy="113.853" rx="65.1898" ry="28.4133" fill="url(#paint4_radial_1063_5351)" fillOpacity="0.6" />
                                        </g>
                                        <path d="M57.669 90.3667L49.1464 109.424V61.9976L57.669 65.6329V90.3667Z" fill="url(#paint5_linear_1063_5351)" />
                                        <path d="M69.5955 51.0017L72.7655 35.7053L103.51 35.7684L82.3772 52.0397L69.5955 51.0017Z" fill="url(#paint6_linear_1063_5351)" fillOpacity="0.8" />
                                        <g opacity="0.7">
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint7_linear_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint8_radial_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint9_linear_1063_5351)" />
                                        </g>
                                        <path d="M69.5946 51.0017L84.8354 55.9413L72.9668 72.1315L57.67 65.6329L69.5946 51.0017Z" fill="url(#paint10_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M82.2375 75.9836L97.5972 82.3333L85.6714 95.9222L71.1659 90.1271L82.2375 75.9836Z" fill="url(#paint11_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M69.5946 51.002L84.8354 55.9416L97.6178 56.9797L82.376 52.0395L69.5946 51.002Z" fill="url(#paint12_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M57.6643 90.3629L72.9681 96.6178L85.6884 95.9301L71.1671 90.1282L57.6643 90.3629Z" fill="url(#paint13_linear_1063_5351)" />
                                        <path d="M84.8754 56.0104L72.7659 35.7053L49.1464 61.9973L72.9682 72.1295L84.8754 56.0104Z" fill="url(#paint14_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5892 82.3386L103.449 84.8091V35.6694L97.6042 56.9843L97.5892 82.3386Z" fill="url(#paint15_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M72.9657 96.6157L49.1464 109.424L79.9996 113.463L85.6647 95.9214L72.9657 96.6157Z" fill="url(#paint16_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5941 82.3335L103.447 84.8085L79.9994 113.463L85.6645 95.9213L97.5941 82.3335Z" fill="url(#paint17_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint18_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint19_linear_1063_5351)" fillOpacity="0.6" />
                                        <path d="M49.186 109.46L57.6787 90.345L72.9657 96.6159L49.186 109.46Z" fill="url(#paint20_linear_1063_5351)" />
                                        <path d="M18.6925 74.5255L168.962 135.693L166.484 111.295L16.4144 48.3237L18.6925 74.5255Z" fill="url(#paint21_linear_1063_5351)" fillOpacity="0.4" />
                                        <path d="M18.6925 68.773L168.962 129.941L166.484 111.295L16.4144 48.3237L18.6925 68.773Z" fill="url(#paint22_linear_1063_5351)" fillOpacity="0.3" />
                                        <g opacity="0.7">
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint23_linear_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint24_radial_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint25_linear_1063_5351)" />
                                        </g>
                                        <path d="M169.334 217.719C169.334 222.137 165.752 225.719 161.334 225.719L22 225.719C17.5817 225.719 14 222.137 14 217.719L14 125.234C14 120.816 17.5817 117.234 22 117.234L161.334 117.234C165.752 117.234 169.334 120.816 169.334 125.234L169.334 217.719Z" fill="#1C1C1E" />
                                        <path d="M168.834 125.235C168.834 121.092 165.476 117.735 161.334 117.735L22 117.735C17.8578 117.735 14.5 121.092 14.5 125.235L14.5 217.719C14.5 221.861 17.8579 225.219 22 225.219L161.334 225.219C165.476 225.219 168.834 221.861 168.834 217.719L168.834 125.235Z" stroke="url(#paint26_linear_1063_5351)" />
                                        <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0em">
                                            <tspan x="27.3779" y="149.747">{candidateName2}</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="6" letterSpacing="0.35em">
                                            <tspan x="27.3779" y="134.941">CANDIDATE</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="19.5742" y="173.003">DESCRIPTION</tspan>
                                        </text>
                                        <g opacity="0.5" filter="url(#filter1_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.91706" ry="0.414062" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter2_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.1878" ry="2.07031" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter3_f_1063_5351)">
                                            <ellipse cx="22.7513" cy="117.649" rx="1.45853" ry="1.38021" fill="#EFBB8A" />
                                        </g>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="106.199" y="144.446">VOTES</tspan>
                                        </text>
                                        <g filter="url(#filter4_d_1063_5351)">
                                            <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="14" fontWeight="900" letterSpacing="0em">
                                                <tspan x="110.982" y="162.917">{candidateVotes2}</tspan>
                                            </text>
                                        </g>
                                        <g style={{ mixBlendMode: "overlay" }}>
                                            <rect x="118.285" y="94.0471" width="2.1878" height="16.5625" rx="1.0939" fill="#F0C777" />
                                            <rect x="124.119" y="104.813" width="2.1878" height="5.79687" rx="1.0939" fill="#F0C777" />
                                            <rect x="129.953" y="101.5" width="2.1878" height="9.10937" rx="1.0939" fill="#F0C777" />
                                            <rect x="135.787" y="95.7034" width="2.1878" height="14.9062" rx="1.0939" fill="#F0C777" />
                                            <rect x="141.621" y="90.7344" width="2.1878" height="19.875" rx="1.0939" fill="#F0C777" />
                                            <rect x="147.288" y="98.2026" width="2.38851" height="12.7866" rx="1.19426" fill="#F0C777" />
                                            <rect x="153.29" y="94.875" width="2.1878" height="15.7344" rx="1.0939" fill="#F0C777" />
                                        </g>
                                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="8" letterSpacing="0.02em">
                                            <tspan x="35.6067" y="193.109">ONEPOIRNGPOEITGWP5Kewd</tspan>
                                            <tspan x="35.6067" y="203.109">efefe</tspan>
                                            <tspan x="35.6067" y="213.109">STKGJEPKTJG</tspan>
                                        </text>
                                        <g filter="url(#filter5_d_1063_5351)">
                                            <path d="M30.5059 190.277C30.5059 192.782 28.6343 194.746 26.4048 194.746C24.1754 194.746 22.3038 192.782 22.3038 190.277C22.3038 187.772 24.1754 185.809 26.4048 185.809C28.6343 185.809 30.5059 187.772 30.5059 190.277Z" stroke="#E67662" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_1063_5351" x="0.0438232" y="0.28125" width="183.246" height="263.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter1_f_1063_5351" x="18.8341" y="116.235" width="7.83411" height="2.82812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter2_f_1063_5351" x="17.5634" y="112.578" width="10.3756" height="10.1406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter3_f_1063_5351" x="20.2927" y="115.268" width="4.91711" height="4.7605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter4_d_1063_5351" x="105.122" y="146.304" width="40.04" height="22.5701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="3" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <filter id="filter5_d_1063_5351" x="17.8038" y="181.309" width="17.202" height="17.9375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1063_5351" x1="38.3336" y1="39.9937" x2="145.587" y2="109.63" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#9492ED" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#7674EC" />
                                                <stop offset="1" stopColor="#817FDF" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1063_5351" x1="38.3387" y1="40.0302" x2="145.592" y2="109.667" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1063_5351" x1="57.6678" y1="71.0447" x2="73.3281" y2="72.4907" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#548DD1" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1063_5351" x1="46.4465" y1="81.9588" x2="80.5636" y2="90.3526" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#2B79ED" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.1898 113.853) rotate(90) scale(28.4133 65.1898)">
                                                <stop offset="0.0729167" stopColor="white" />
                                                <stop offset="0.34375" stopColor="#FF7373" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="#0E7DFF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint5_linear_1063_5351" x1="57.669" y1="64.3582" x2="54.432" y2="101.532" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2295D6" />
                                                <stop offset="1" stopColor="#2249D6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_1063_5351" x1="70.6404" y1="39.431" x2="80.8523" y2="55.0933" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.534769" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="0.716558" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_1063_5351" x1="83.1759" y1="57.0117" x2="43.4715" y2="87.1088" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#324BCC" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint8_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4219 100.525) rotate(-90) scale(30.372 19.3638)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint9_linear_1063_5351" x1="57.6679" y1="85.921" x2="68.9298" y2="71.2174" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint10_linear_1063_5351" x1="64.9929" y1="56.2139" x2="77.0283" y2="64.8435" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint11_linear_1063_5351" x1="96.625" y1="83.3117" x2="71.0196" y2="92.835" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="1" stopColor="#E39DE5" />
                                            </linearGradient>
                                            <linearGradient id="paint12_linear_1063_5351" x1="79.7268" y1="51.7819" x2="79.4853" y2="55.908" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint13_linear_1063_5351" x1="67.7973" y1="90.7325" x2="67.5558" y2="94.8586" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint14_linear_1063_5351" x1="57.3671" y1="51.8646" x2="72.9794" y2="69.648" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0729167" stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#D22828" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint15_linear_1063_5351" x1="104.618" y1="35.6694" x2="117.656" y2="42.1091" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00889157" stopColor="#1D2A9B" stopOpacity="0.8" />
                                                <stop offset="0.645598" stopColor="#AF2929" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint16_linear_1063_5351" x1="49.1464" y1="107.127" x2="88.1882" y2="100.568" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#50111D" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint17_linear_1063_5351" x1="98.863" y1="93.1217" x2="90.8386" y2="88.3959" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.539474" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint18_linear_1063_5351" x1="102.546" y1="42.8766" x2="91.4731" y2="60.4757" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0A3892" />
                                                <stop offset="0.536458" stopColor="#29B2ED" stopOpacity="0.8" />
                                                <stop offset="0.967948" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint19_linear_1063_5351" x1="97.2645" y1="58.0661" x2="88.6797" y2="41.1541" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF439D" />
                                                <stop offset="1" stopColor="#FF43D6" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint20_linear_1063_5351" x1="56.0201" y1="89.3712" x2="71.8281" y2="101.421" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D2549" />
                                                <stop offset="1" stopColor="#FF93E1" stopOpacity="0.6" />
                                            </linearGradient>
                                            <linearGradient id="paint21_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint22_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#8A88EC" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint23_linear_1063_5351" x1="98.4157" y1="61.9505" x2="58.7423" y2="91.9622" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0B1135" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint24_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.6907 105.455) rotate(-90) scale(30.3652 19.3196)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint25_linear_1063_5351" x1="77.0095" y1="91.6714" x2="86.2512" y2="78.5094" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint26_linear_1063_5351" x1="45.3584" y1="104.813" x2="73.3317" y2="184.368" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0749607" stopColor="#9F4E03" />
                                                <stop offset="0.421149" stopColor="#465558" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="264" viewBox="0 0 184 264" fill="none">
                                        <g opacity="0.35" filter="url(#filter0_f_1063_5351)">
                                            <path d="M30.0438 38.2812C30.0438 33.863 33.6255 30.2812 38.0438 30.2812H145.29C149.708 30.2812 153.29 33.863 153.29 38.2812V226C153.29 230.418 149.708 234 145.29 234H38.0438C33.6255 234 30.0438 230.418 30.0438 226V38.2812Z" fill="black" />
                                        </g>
                                        <path d="M14 30C14 25.5817 17.5817 22 22 22H161.334C165.752 22 169.334 25.5817 169.334 30V217.719C169.334 222.137 165.752 225.719 161.334 225.719H22C17.5817 225.719 14 222.137 14 217.719V30Z" fill="#1C1C1E" />
                                        <path d="M18.4528 22L168.722 83.1676L166.484 111.263L16.4146 48.292L18.4528 22Z" fill="url(#paint0_linear_1063_5351)" fillOpacity="0.3" />
                                        <path d="M18.4579 28.384L168.728 89.5516L166.489 111.299L16.4197 48.3284L18.4579 28.384Z" fill="url(#paint1_linear_1063_5351)" fillOpacity="0.2" />
                                        <path d="M57.6678 90.365L72.9096 95.3043L72.9655 72.1295L57.6678 65.6343V90.365Z" fill="url(#paint2_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M72.9657 96.614L49.1464 109.424V61.9976L72.9657 72.132V96.614Z" fill="url(#paint3_linear_1063_5351)" fillOpacity="0.8" />
                                        <g style={{ mixBlendMode: "lighten" }}>
                                            <ellipse cx="79.1898" cy="113.853" rx="65.1898" ry="28.4133" fill="url(#paint4_radial_1063_5351)" fillOpacity="0.6" />
                                        </g>
                                        <path d="M57.669 90.3667L49.1464 109.424V61.9976L57.669 65.6329V90.3667Z" fill="url(#paint5_linear_1063_5351)" />
                                        <path d="M69.5955 51.0017L72.7655 35.7053L103.51 35.7684L82.3772 52.0397L69.5955 51.0017Z" fill="url(#paint6_linear_1063_5351)" fillOpacity="0.8" />
                                        <g opacity="0.7">
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint7_linear_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint8_radial_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint9_linear_1063_5351)" />
                                        </g>
                                        <path d="M69.5946 51.0017L84.8354 55.9413L72.9668 72.1315L57.67 65.6329L69.5946 51.0017Z" fill="url(#paint10_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M82.2375 75.9836L97.5972 82.3333L85.6714 95.9222L71.1659 90.1271L82.2375 75.9836Z" fill="url(#paint11_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M69.5946 51.002L84.8354 55.9416L97.6178 56.9797L82.376 52.0395L69.5946 51.002Z" fill="url(#paint12_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M57.6643 90.3629L72.9681 96.6178L85.6884 95.9301L71.1671 90.1282L57.6643 90.3629Z" fill="url(#paint13_linear_1063_5351)" />
                                        <path d="M84.8754 56.0104L72.7659 35.7053L49.1464 61.9973L72.9682 72.1295L84.8754 56.0104Z" fill="url(#paint14_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5892 82.3386L103.449 84.8091V35.6694L97.6042 56.9843L97.5892 82.3386Z" fill="url(#paint15_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M72.9657 96.6157L49.1464 109.424L79.9996 113.463L85.6647 95.9214L72.9657 96.6157Z" fill="url(#paint16_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5941 82.3335L103.447 84.8085L79.9994 113.463L85.6645 95.9213L97.5941 82.3335Z" fill="url(#paint17_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint18_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint19_linear_1063_5351)" fillOpacity="0.6" />
                                        <path d="M49.186 109.46L57.6787 90.345L72.9657 96.6159L49.186 109.46Z" fill="url(#paint20_linear_1063_5351)" />
                                        <path d="M18.6925 74.5255L168.962 135.693L166.484 111.295L16.4144 48.3237L18.6925 74.5255Z" fill="url(#paint21_linear_1063_5351)" fillOpacity="0.4" />
                                        <path d="M18.6925 68.773L168.962 129.941L166.484 111.295L16.4144 48.3237L18.6925 68.773Z" fill="url(#paint22_linear_1063_5351)" fillOpacity="0.3" />
                                        <g opacity="0.7">
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint23_linear_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint24_radial_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint25_linear_1063_5351)" />
                                        </g>
                                        <path d="M169.334 217.719C169.334 222.137 165.752 225.719 161.334 225.719L22 225.719C17.5817 225.719 14 222.137 14 217.719L14 125.234C14 120.816 17.5817 117.234 22 117.234L161.334 117.234C165.752 117.234 169.334 120.816 169.334 125.234L169.334 217.719Z" fill="#1C1C1E" />
                                        <path d="M168.834 125.235C168.834 121.092 165.476 117.735 161.334 117.735L22 117.735C17.8578 117.735 14.5 121.092 14.5 125.235L14.5 217.719C14.5 221.861 17.8579 225.219 22 225.219L161.334 225.219C165.476 225.219 168.834 221.861 168.834 217.719L168.834 125.235Z" stroke="url(#paint26_linear_1063_5351)" />
                                        <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0em">
                                            <tspan x="27.3779" y="149.747">{candidateName3}</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="6" letterSpacing="0.35em">
                                            <tspan x="27.3779" y="134.941">CANDIDATE</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="19.5742" y="173.003">DESCRIPTION</tspan>
                                        </text>
                                        <g opacity="0.5" filter="url(#filter1_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.91706" ry="0.414062" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter2_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.1878" ry="2.07031" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter3_f_1063_5351)">
                                            <ellipse cx="22.7513" cy="117.649" rx="1.45853" ry="1.38021" fill="#EFBB8A" />
                                        </g>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="106.199" y="144.446">VOTES</tspan>
                                        </text>
                                        <g filter="url(#filter4_d_1063_5351)">
                                            <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="14" fontWeight="900" letterSpacing="0em">
                                                <tspan x="110.982" y="162.917">{candidateVotes3}</tspan>
                                            </text>
                                        </g>
                                        <g style={{ mixBlendMode: "overlay" }}>
                                            <rect x="118.285" y="94.0471" width="2.1878" height="16.5625" rx="1.0939" fill="#F0C777" />
                                            <rect x="124.119" y="104.813" width="2.1878" height="5.79687" rx="1.0939" fill="#F0C777" />
                                            <rect x="129.953" y="101.5" width="2.1878" height="9.10937" rx="1.0939" fill="#F0C777" />
                                            <rect x="135.787" y="95.7034" width="2.1878" height="14.9062" rx="1.0939" fill="#F0C777" />
                                            <rect x="141.621" y="90.7344" width="2.1878" height="19.875" rx="1.0939" fill="#F0C777" />
                                            <rect x="147.288" y="98.2026" width="2.38851" height="12.7866" rx="1.19426" fill="#F0C777" />
                                            <rect x="153.29" y="94.875" width="2.1878" height="15.7344" rx="1.0939" fill="#F0C777" />
                                        </g>
                                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="8" letterSpacing="0.02em">
                                            <tspan x="35.6067" y="193.109">ONEPOIRNGPOEITGWP5Kewd</tspan>
                                            <tspan x="35.6067" y="203.109">efefe</tspan>
                                            <tspan x="35.6067" y="213.109">STKGJEPKTJG</tspan>
                                        </text>
                                        <g filter="url(#filter5_d_1063_5351)">
                                            <path d="M30.5059 190.277C30.5059 192.782 28.6343 194.746 26.4048 194.746C24.1754 194.746 22.3038 192.782 22.3038 190.277C22.3038 187.772 24.1754 185.809 26.4048 185.809C28.6343 185.809 30.5059 187.772 30.5059 190.277Z" stroke="#E67662" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_1063_5351" x="0.0438232" y="0.28125" width="183.246" height="263.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter1_f_1063_5351" x="18.8341" y="116.235" width="7.83411" height="2.82812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter2_f_1063_5351" x="17.5634" y="112.578" width="10.3756" height="10.1406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter3_f_1063_5351" x="20.2927" y="115.268" width="4.91711" height="4.7605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter4_d_1063_5351" x="105.122" y="146.304" width="40.04" height="22.5701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="3" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <filter id="filter5_d_1063_5351" x="17.8038" y="181.309" width="17.202" height="17.9375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1063_5351" x1="38.3336" y1="39.9937" x2="145.587" y2="109.63" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#9492ED" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#7674EC" />
                                                <stop offset="1" stopColor="#817FDF" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1063_5351" x1="38.3387" y1="40.0302" x2="145.592" y2="109.667" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1063_5351" x1="57.6678" y1="71.0447" x2="73.3281" y2="72.4907" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#548DD1" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1063_5351" x1="46.4465" y1="81.9588" x2="80.5636" y2="90.3526" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#2B79ED" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.1898 113.853) rotate(90) scale(28.4133 65.1898)">
                                                <stop offset="0.0729167" stopColor="white" />
                                                <stop offset="0.34375" stopColor="#FF7373" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="#0E7DFF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint5_linear_1063_5351" x1="57.669" y1="64.3582" x2="54.432" y2="101.532" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2295D6" />
                                                <stop offset="1" stopColor="#2249D6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_1063_5351" x1="70.6404" y1="39.431" x2="80.8523" y2="55.0933" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.534769" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="0.716558" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_1063_5351" x1="83.1759" y1="57.0117" x2="43.4715" y2="87.1088" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#324BCC" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint8_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4219 100.525) rotate(-90) scale(30.372 19.3638)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint9_linear_1063_5351" x1="57.6679" y1="85.921" x2="68.9298" y2="71.2174" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint10_linear_1063_5351" x1="64.9929" y1="56.2139" x2="77.0283" y2="64.8435" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint11_linear_1063_5351" x1="96.625" y1="83.3117" x2="71.0196" y2="92.835" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="1" stopColor="#E39DE5" />
                                            </linearGradient>
                                            <linearGradient id="paint12_linear_1063_5351" x1="79.7268" y1="51.7819" x2="79.4853" y2="55.908" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint13_linear_1063_5351" x1="67.7973" y1="90.7325" x2="67.5558" y2="94.8586" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint14_linear_1063_5351" x1="57.3671" y1="51.8646" x2="72.9794" y2="69.648" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0729167" stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#D22828" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint15_linear_1063_5351" x1="104.618" y1="35.6694" x2="117.656" y2="42.1091" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00889157" stopColor="#1D2A9B" stopOpacity="0.8" />
                                                <stop offset="0.645598" stopColor="#AF2929" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint16_linear_1063_5351" x1="49.1464" y1="107.127" x2="88.1882" y2="100.568" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#50111D" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint17_linear_1063_5351" x1="98.863" y1="93.1217" x2="90.8386" y2="88.3959" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.539474" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint18_linear_1063_5351" x1="102.546" y1="42.8766" x2="91.4731" y2="60.4757" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0A3892" />
                                                <stop offset="0.536458" stopColor="#29B2ED" stopOpacity="0.8" />
                                                <stop offset="0.967948" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint19_linear_1063_5351" x1="97.2645" y1="58.0661" x2="88.6797" y2="41.1541" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF439D" />
                                                <stop offset="1" stopColor="#FF43D6" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint20_linear_1063_5351" x1="56.0201" y1="89.3712" x2="71.8281" y2="101.421" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D2549" />
                                                <stop offset="1" stopColor="#FF93E1" stopOpacity="0.6" />
                                            </linearGradient>
                                            <linearGradient id="paint21_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint22_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#8A88EC" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint23_linear_1063_5351" x1="98.4157" y1="61.9505" x2="58.7423" y2="91.9622" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0B1135" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint24_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.6907 105.455) rotate(-90) scale(30.3652 19.3196)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint25_linear_1063_5351" x1="77.0095" y1="91.6714" x2="86.2512" y2="78.5094" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint26_linear_1063_5351" x1="45.3584" y1="104.813" x2="73.3317" y2="184.368" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0749607" stopColor="#9F4E03" />
                                                <stop offset="0.421149" stopColor="#465558" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="184" height="264" viewBox="0 0 184 264" fill="none">
                                        <g opacity="0.35" filter="url(#filter0_f_1063_5351)">
                                            <path d="M30.0438 38.2812C30.0438 33.863 33.6255 30.2812 38.0438 30.2812H145.29C149.708 30.2812 153.29 33.863 153.29 38.2812V226C153.29 230.418 149.708 234 145.29 234H38.0438C33.6255 234 30.0438 230.418 30.0438 226V38.2812Z" fill="black" />
                                        </g>
                                        <path d="M14 30C14 25.5817 17.5817 22 22 22H161.334C165.752 22 169.334 25.5817 169.334 30V217.719C169.334 222.137 165.752 225.719 161.334 225.719H22C17.5817 225.719 14 222.137 14 217.719V30Z" fill="#1C1C1E" />
                                        <path d="M18.4528 22L168.722 83.1676L166.484 111.263L16.4146 48.292L18.4528 22Z" fill="url(#paint0_linear_1063_5351)" fillOpacity="0.3" />
                                        <path d="M18.4579 28.384L168.728 89.5516L166.489 111.299L16.4197 48.3284L18.4579 28.384Z" fill="url(#paint1_linear_1063_5351)" fillOpacity="0.2" />
                                        <path d="M57.6678 90.365L72.9096 95.3043L72.9655 72.1295L57.6678 65.6343V90.365Z" fill="url(#paint2_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M72.9657 96.614L49.1464 109.424V61.9976L72.9657 72.132V96.614Z" fill="url(#paint3_linear_1063_5351)" fillOpacity="0.8" />
                                        <g style={{ mixBlendMode: "lighten" }}>
                                            <ellipse cx="79.1898" cy="113.853" rx="65.1898" ry="28.4133" fill="url(#paint4_radial_1063_5351)" fillOpacity="0.6" />
                                        </g>
                                        <path d="M57.669 90.3667L49.1464 109.424V61.9976L57.669 65.6329V90.3667Z" fill="url(#paint5_linear_1063_5351)" />
                                        <path d="M69.5955 51.0017L72.7655 35.7053L103.51 35.7684L82.3772 52.0397L69.5955 51.0017Z" fill="url(#paint6_linear_1063_5351)" fillOpacity="0.8" />
                                        <g opacity="0.7">
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint7_linear_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint8_radial_1063_5351)" />
                                            <path d="M82.3766 52.0392L69.5947 51.0017L57.6678 65.632V90.3652L71.1654 90.1283L82.2673 75.9728L82.3766 52.0392Z" fill="url(#paint9_linear_1063_5351)" />
                                        </g>
                                        <path d="M69.5946 51.0017L84.8354 55.9413L72.9668 72.1315L57.67 65.6329L69.5946 51.0017Z" fill="url(#paint10_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M82.2375 75.9836L97.5972 82.3333L85.6714 95.9222L71.1659 90.1271L82.2375 75.9836Z" fill="url(#paint11_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M69.5946 51.002L84.8354 55.9416L97.6178 56.9797L82.376 52.0395L69.5946 51.002Z" fill="url(#paint12_linear_1063_5351)" fillOpacity="0.8" />
                                        <path d="M57.6643 90.3629L72.9681 96.6178L85.6884 95.9301L71.1671 90.1282L57.6643 90.3629Z" fill="url(#paint13_linear_1063_5351)" />
                                        <path d="M84.8754 56.0104L72.7659 35.7053L49.1464 61.9973L72.9682 72.1295L84.8754 56.0104Z" fill="url(#paint14_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5892 82.3386L103.449 84.8091V35.6694L97.6042 56.9843L97.5892 82.3386Z" fill="url(#paint15_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M72.9657 96.6157L49.1464 109.424L79.9996 113.463L85.6647 95.9214L72.9657 96.6157Z" fill="url(#paint16_linear_1063_5351)" fillOpacity="0.9" />
                                        <path d="M97.5941 82.3335L103.447 84.8085L79.9994 113.463L85.6645 95.9213L97.5941 82.3335Z" fill="url(#paint17_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint18_linear_1063_5351)" />
                                        <path d="M84.8752 56.0104L72.7657 35.7053H103.459L97.6042 56.9841L84.8752 56.0104Z" fill="url(#paint19_linear_1063_5351)" fillOpacity="0.6" />
                                        <path d="M49.186 109.46L57.6787 90.345L72.9657 96.6159L49.186 109.46Z" fill="url(#paint20_linear_1063_5351)" />
                                        <path d="M18.6925 74.5255L168.962 135.693L166.484 111.295L16.4144 48.3237L18.6925 74.5255Z" fill="url(#paint21_linear_1063_5351)" fillOpacity="0.4" />
                                        <path d="M18.6925 68.773L168.962 129.941L166.484 111.295L16.4144 48.3237L18.6925 68.773Z" fill="url(#paint22_linear_1063_5351)" fillOpacity="0.3" />
                                        <g opacity="0.7">
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint23_linear_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint24_radial_1063_5351)" />
                                            <path d="M97.6182 56.9792L84.8655 55.9419L72.9658 72.128V96.6161L85.6908 95.9217L97.5945 82.3256L97.6182 56.9792Z" fill="url(#paint25_linear_1063_5351)" />
                                        </g>
                                        <path d="M169.334 217.719C169.334 222.137 165.752 225.719 161.334 225.719L22 225.719C17.5817 225.719 14 222.137 14 217.719L14 125.234C14 120.816 17.5817 117.234 22 117.234L161.334 117.234C165.752 117.234 169.334 120.816 169.334 125.234L169.334 217.719Z" fill="#1C1C1E" />
                                        <path d="M168.834 125.235C168.834 121.092 165.476 117.735 161.334 117.735L22 117.735C17.8578 117.735 14.5 121.092 14.5 125.235L14.5 217.719C14.5 221.861 17.8579 225.219 22 225.219L161.334 225.219C165.476 225.219 168.834 221.861 168.834 217.719L168.834 125.235Z" stroke="url(#paint26_linear_1063_5351)" />
                                        <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="11" letterSpacing="0em">
                                            <tspan x="27.3779" y="149.747">{candidateName4}</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="6" letterSpacing="0.35em">
                                            <tspan x="27.3779" y="134.941">CANDIDATE</tspan>
                                        </text>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="19.5742" y="173.003">DESCRIPTION</tspan>
                                        </text>
                                        <g opacity="0.5" filter="url(#filter1_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.91706" ry="0.414062" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter2_f_1063_5351)">
                                            <ellipse cx="22.7512" cy="117.649" rx="2.1878" ry="2.07031" fill="#BE7D42" />
                                        </g>
                                        <g filter="url(#filter3_f_1063_5351)">
                                            <ellipse cx="22.7513" cy="117.649" rx="1.45853" ry="1.38021" fill="#EFBB8A" />
                                        </g>
                                        <text opacity="0.6" fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="7" letterSpacing="0.35em">
                                            <tspan x="106.199" y="144.446">VOTES</tspan>
                                        </text>
                                        <g filter="url(#filter4_d_1063_5351)">
                                            <text fill="#E67662" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="14" fontWeight="900" letterSpacing="0em">
                                                <tspan x="110.982" y="162.917">{candidateVotes4}</tspan>
                                            </text>
                                        </g>
                                        <g style={{ mixBlendMode: "overlay" }}>
                                            <rect x="118.285" y="94.0471" width="2.1878" height="16.5625" rx="1.0939" fill="#F0C777" />
                                            <rect x="124.119" y="104.813" width="2.1878" height="5.79687" rx="1.0939" fill="#F0C777" />
                                            <rect x="129.953" y="101.5" width="2.1878" height="9.10937" rx="1.0939" fill="#F0C777" />
                                            <rect x="135.787" y="95.7034" width="2.1878" height="14.9062" rx="1.0939" fill="#F0C777" />
                                            <rect x="141.621" y="90.7344" width="2.1878" height="19.875" rx="1.0939" fill="#F0C777" />
                                            <rect x="147.288" y="98.2026" width="2.38851" height="12.7866" rx="1.19426" fill="#F0C777" />
                                            <rect x="153.29" y="94.875" width="2.1878" height="15.7344" rx="1.0939" fill="#F0C777" />
                                        </g>
                                        <text fill="white" xmlSpace="preserve" style={{ whiteSpace: "pre" }} fontFamily="Poppins" fontSize="8" letterSpacing="0.02em">
                                            <tspan x="35.6067" y="193.109">ONEPOIRNGPOEITGWP5Kewd</tspan>
                                            <tspan x="35.6067" y="203.109">efefe</tspan>
                                            <tspan x="35.6067" y="213.109">STKGJEPKTJG</tspan>
                                        </text>
                                        <g filter="url(#filter5_d_1063_5351)">
                                            <path d="M30.5059 190.277C30.5059 192.782 28.6343 194.746 26.4048 194.746C24.1754 194.746 22.3038 192.782 22.3038 190.277C22.3038 187.772 24.1754 185.809 26.4048 185.809C28.6343 185.809 30.5059 187.772 30.5059 190.277Z" stroke="#E67662" />
                                        </g>
                                        <defs>
                                            <filter id="filter0_f_1063_5351" x="0.0438232" y="0.28125" width="183.246" height="263.719" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="15" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter1_f_1063_5351" x="18.8341" y="116.235" width="7.83411" height="2.82812" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter2_f_1063_5351" x="17.5634" y="112.578" width="10.3756" height="10.1406" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter3_f_1063_5351" x="20.2927" y="115.268" width="4.91711" height="4.7605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_1063_5351" />
                                            </filter>
                                            <filter id="filter4_d_1063_5351" x="105.122" y="146.304" width="40.04" height="22.5701" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="3" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 0.4 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <filter id="filter5_d_1063_5351" x="17.8038" y="181.309" width="17.202" height="17.9375" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                <feOffset />
                                                <feGaussianBlur stdDeviation="2" />
                                                <feColorMatrix type="matrix" values="0 0 0 0 0.941176 0 0 0 0 0.780392 0 0 0 0 0.466667 0 0 0 1 0" />
                                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1063_5351" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1063_5351" result="shape" />
                                            </filter>
                                            <linearGradient id="paint0_linear_1063_5351" x1="38.3336" y1="39.9937" x2="145.587" y2="109.63" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#9492ED" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#7674EC" />
                                                <stop offset="1" stopColor="#817FDF" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint1_linear_1063_5351" x1="38.3387" y1="40.0302" x2="145.592" y2="109.667" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint2_linear_1063_5351" x1="57.6678" y1="71.0447" x2="73.3281" y2="72.4907" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#548DD1" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint3_linear_1063_5351" x1="46.4465" y1="81.9588" x2="80.5636" y2="90.3526" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#2B79ED" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <radialGradient id="paint4_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(79.1898 113.853) rotate(90) scale(28.4133 65.1898)">
                                                <stop offset="0.0729167" stopColor="white" />
                                                <stop offset="0.34375" stopColor="#FF7373" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="#0E7DFF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint5_linear_1063_5351" x1="57.669" y1="64.3582" x2="54.432" y2="101.532" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#2295D6" />
                                                <stop offset="1" stopColor="#2249D6" stopOpacity="0.3" />
                                            </linearGradient>
                                            <linearGradient id="paint6_linear_1063_5351" x1="70.6404" y1="39.431" x2="80.8523" y2="55.0933" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.534769" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="0.716558" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint7_linear_1063_5351" x1="83.1759" y1="57.0117" x2="43.4715" y2="87.1088" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#324BCC" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint8_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(70.4219 100.525) rotate(-90) scale(30.372 19.3638)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint9_linear_1063_5351" x1="57.6679" y1="85.921" x2="68.9298" y2="71.2174" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint10_linear_1063_5351" x1="64.9929" y1="56.2139" x2="77.0283" y2="64.8435" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint11_linear_1063_5351" x1="96.625" y1="83.3117" x2="71.0196" y2="92.835" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="1" stopColor="#E39DE5" />
                                            </linearGradient>
                                            <linearGradient id="paint12_linear_1063_5351" x1="79.7268" y1="51.7819" x2="79.4853" y2="55.908" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint13_linear_1063_5351" x1="67.7973" y1="90.7325" x2="67.5558" y2="94.8586" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#4078CB" />
                                                <stop offset="0.59375" stopColor="#E39DE5" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint14_linear_1063_5351" x1="57.3671" y1="51.8646" x2="72.9794" y2="69.648" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0729167" stopColor="#4B86FA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#D22828" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint15_linear_1063_5351" x1="104.618" y1="35.6694" x2="117.656" y2="42.1091" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.00889157" stopColor="#1D2A9B" stopOpacity="0.8" />
                                                <stop offset="0.645598" stopColor="#AF2929" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint16_linear_1063_5351" x1="49.1464" y1="107.127" x2="88.1882" y2="100.568" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.791667" stopColor="#50111D" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint17_linear_1063_5351" x1="98.863" y1="93.1217" x2="90.8386" y2="88.3959" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0340296" stopColor="#4B5CFA" stopOpacity="0.8" />
                                                <stop offset="0.539474" stopColor="#FCA6EF" stopOpacity="0.8" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint18_linear_1063_5351" x1="102.546" y1="42.8766" x2="91.4731" y2="60.4757" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0A3892" />
                                                <stop offset="0.536458" stopColor="#29B2ED" stopOpacity="0.8" />
                                                <stop offset="0.967948" stopColor="white" />
                                            </linearGradient>
                                            <linearGradient id="paint19_linear_1063_5351" x1="97.2645" y1="58.0661" x2="88.6797" y2="41.1541" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#FF439D" />
                                                <stop offset="1" stopColor="#FF43D6" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint20_linear_1063_5351" x1="56.0201" y1="89.3712" x2="71.8281" y2="101.421" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0D2549" />
                                                <stop offset="1" stopColor="#FF93E1" stopOpacity="0.6" />
                                            </linearGradient>
                                            <linearGradient id="paint21_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#232183" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint22_linear_1063_5351" x1="38.3335" y1="40.0255" x2="145.587" y2="109.662" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#232183" stopOpacity="0" />
                                                <stop offset="0.546875" stopColor="#8A88EC" />
                                                <stop offset="1" stopColor="#232183" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint23_linear_1063_5351" x1="98.4157" y1="61.9505" x2="58.7423" y2="91.9622" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#0B1135" />
                                                <stop offset="1" stopColor="white" stopOpacity="0.8" />
                                            </linearGradient>
                                            <radialGradient id="paint24_radial_1063_5351" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(85.6907 105.455) rotate(-90) scale(30.3652 19.3196)">
                                                <stop stopColor="#00F0FF" />
                                                <stop offset="1" stopColor="#00F0FF" stopOpacity="0" />
                                            </radialGradient>
                                            <linearGradient id="paint25_linear_1063_5351" x1="77.0095" y1="91.6714" x2="86.2512" y2="78.5094" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" />
                                                <stop offset="1" stopColor="white" stopOpacity="0" />
                                            </linearGradient>
                                            <linearGradient id="paint26_linear_1063_5351" x1="45.3584" y1="104.813" x2="73.3317" y2="184.368" gradientUnits="userSpaceOnUse">
                                                <stop offset="0.0749607" stopColor="#9F4E03" />
                                                <stop offset="0.421149" stopColor="#465558" stopOpacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__wrapper landing__wrapper-2">
                        <p className="landing__title"><span>$GIV</span> TOKEN</p>
                        <p className="landing__desc">$GIV TOKEN : <span className="token">{tokenAddress}</span></p>
                        <p className="landing__desc">$GIV IS DESIGNED TO GENERATE a constant stream of funding that will automating the gift of donation while generating <br />rewards FOR holders. NECESSARY IN BRINGING VALUE THROUGHOUT THE ECOSYSTEM.</p>
                        <p className="landing__desc">BUILT ON THE SOLANA NETWORK, GIV IS A UTILITY TOKEN WITH A BUILT-IN FEE STRUCTURE MADE FOR POWERING  THE GIVING POOL, <br />PLATFORM AND COMMUNITY.</p>
                        <p className="landing__desc">10% OF EACH TRANSACTION IS SPLIT UP  AND UTILIZED:</p>
                        <p className="landing__desc">5% WILL BE SWAPPED INTO SOL AND USED FUNDING TO THE GIVING POOL.</p>
                        <p className="landing__desc">5% to be converted to USDT and distributed into the wallets of $GIV holders</p>
                        <p className="landing__desc">READ OUR TOKENOMICS TO SEE ADDITIONAL FEATURES BUILT INTO GIV.</p>
                    </div>
                    <div className="landing__wrapper landing__wrapper-3">
                        <div className="landing__box-wrapper">
                            <div>
                                <p className="landing__box-title">Pool Candidates</p>
                                <div className="landing__box">
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span /> <a href="https://www.worldvision.org" rel="noreferrer" target="_blank">WorldVision</a></p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span /> <a href="https://www.pedulianak.org" rel="noreferrer" target="_blank">Pedulianak</a></p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span /> <a href="https://donate.thedigital.gov.ua" rel="noreferrer" target="_blank">Thedigital - ukraine</a></p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span /> <a href="https://www.lunchbowl.org" rel="noreferrer" target="_blank">Lunchbow Network</a></p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span /> <a href="https://matwproject.org/" rel="noreferrer" target="_blank">MatwProject</a></p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="landing__box-title">Newsworthy</p>
                                <div className="landing__box">
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span>Candidate Name</span> (<a href="/" >Link to site</a>) and description</p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span>Candidate Name</span> (<a href="/" >Link to site</a>) and description</p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span>Candidate Name</span> (<a href="/" >Link to site</a>) and description</p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span>Candidate Name</span> (<a href="/">Link to site</a>) and description</p>
                                    </div>
                                    <div><img src="img/union.png" srcSet="img/union@2x.png 2x" alt="" />
                                        <p><span>Candidate Name</span> (<a href="/">Link to site</a>) and description</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__wrapper landing__wrapper-4">
                        <div className="landing__donate">
                            <div className="landing__box-wrapper">
                                <div>
                                    <p className="landing__box-title">Previously Donated</p>
                                    <div className="landing__box">
                                        <div>
                                            <p>recipient: <span>Coming Soon</span></p>
                                            <p>pool date: <span>Coming Soon</span> | pool size: <span>10 eth</span></p>
                                        </div>
                                        <div>
                                            <p>recipient: <span>Coming Soon</span></p>
                                            <p>pool date: <span>Coming Soon</span> | pool size: <span>10 eth</span></p>
                                        </div>
                                        <div>
                                            <p>recipient: <span>Coming Soon</span></p>
                                            <p>pool date: <span>Coming Soon</span> | pool size: <span>10 eth</span></p>
                                        </div>
                                        <div>
                                            <p>recipient: <span>Coming Soon</span></p>
                                            <p>pool date: <span>Coming Soon</span> | pool size: <span>10 eth</span></p>
                                        </div>
                                        <div>
                                            <p>recipient: <span>Coming Soon</span></p>
                                            <p>pool date: <span>Coming Soon</span> | pool size: <span>10 eth</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
export default LandingPage
