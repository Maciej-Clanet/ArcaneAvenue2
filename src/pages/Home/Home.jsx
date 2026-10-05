import "./Home.css";
import { NavLink } from "react-router";
import SectionDivider from "../../components/SectionDivider/SectionDivider";

export default function Home() {

    return (
        <>
            <section className="banner">
                <div className="cta-wrapper">
                    <NavLink to="products" className="cta">Explore Arcane Avenue</NavLink>
                </div>
            </section>
            <SectionDivider text="Featured Products" />
            <SectionDivider text="Latest Listings" link="somewhere" />
        </>
    )
}