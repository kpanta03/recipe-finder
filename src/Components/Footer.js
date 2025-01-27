import React,{useEffect} from 'react'
import "./Style.css"

export default function Footer() {
    useEffect(() => {
        window.feather.replace(); // Initialize Feather icons
      }, []);
    return (
        <>
            <div class="footer container  text-center p-5">
                <h2 class="font1 mb-4">FOLLOW US</h2>
                <div class="social-icons">
                    <a href="#" aria-label="Facebook"><i data-feather="facebook"></i></a>
                    <a href="#" aria-label="Instagram"><i data-feather="instagram"></i></a>
                    <a href="#" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
                </div>
                {/* <!-- Copyright --> */}
                <div class="copyright mt-2">
                    &copy; Copyright all right reserved
                </div>
            </div>

        </>
    )
}
