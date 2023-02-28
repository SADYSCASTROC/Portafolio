import { Navbar } from "./Navbar"
import { Description } from "./Description"
import { InformationAcadem } from "./InformationAcadem"
import { Projects } from "./Projects"
import { ContactSection } from "./ContactSection"
export const Presentation = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Description />
                <InformationAcadem />
                <Projects/>
                <ContactSection/>
            </main>
        </>
    )
}
