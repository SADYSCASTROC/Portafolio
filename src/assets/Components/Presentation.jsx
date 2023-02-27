import { Navbar } from "./Navbar"
import { Description } from "./Description"
import { InformationAcadem } from "./InformationAcadem"
export const Presentation = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <Description />
                <InformationAcadem />
            </main>
        </>
    )
}
